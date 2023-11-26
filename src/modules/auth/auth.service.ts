import { ForbiddenException, Injectable } from '@nestjs/common';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { UserRepository } from 'src/services/repositories/user/user.repository';
import { CreateUserReqDto } from './dto/create-user-req.dto';
import { compare } from 'bcryptjs';
import { LoginUserReqDto } from './dto/login-user-req.dto';
import { TokenService } from 'src/services/token/token.service';
import { UserTokenDataDto } from 'src/common/dto/user-token-data.dto';
import { LoginUserResDto } from './dto/login-user-res.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
  ) {}

  async login(LoginUserReqDto: LoginUserReqDto): Promise<LoginUserResDto> {
    const { email, password } = LoginUserReqDto;
    const user = await this.userRepository.validateUser(email);

    /** compare pass */
    const isEqualPassword = await compare(password, user.password);
    if (!isEqualPassword) throw new ForbiddenException('Password incorrect');

    const tokenData: UserTokenDataDto = {
      id: user.id,
      email: user.email,
    };
    const accessToken = this.tokenService.createAccessToken(tokenData);

    return { ...tokenData, accessToken };
  }

  async signUp(
    createUserReqDto: CreateUserReqDto,
  ): Promise<CommonSuccessResDto> {
    await this.userRepository.createUser(createUserReqDto);
    return { success: true };
  }
}
