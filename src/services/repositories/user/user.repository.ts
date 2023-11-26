import {
  Injectable,
  Logger,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashSync } from 'bcryptjs';

import { UserEntity } from './entities/user.entity';
import { BaseRepository } from 'src/database/base-repository/base-mongo.repository';
import { CreateUserReqDto } from 'src/modules/auth/dto/create-user-req.dto';

@Injectable()
export class UserRepository extends BaseRepository<UserEntity> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }

  async validateUser(email: string) {
    const userByEmail = await this.userRepository.findOne({ where: { email } });
    if (!userByEmail) throw new NotFoundException("User wasn't found");
    return userByEmail;
  }

  async createUser(createUserReqDto: CreateUserReqDto) {
    const { email, password } = createUserReqDto;

    const userByEmail = await this.userRepository.findOne({ where: { email } });
    if (userByEmail) throw new BadRequestException('Email already been taken');

    const newUser = this.userRepository.create({
      ...createUserReqDto,
      password: hashSync(password, 10),
    });
    await this.userRepository.save(newUser);
  }
}
