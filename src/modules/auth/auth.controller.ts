import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ComposeErrorsDecorator } from 'src/common/decorators/compose-errors.decorator';
import { ComposeOthersErrorsDecorator } from 'src/common/decorators/compose-others-errors.decorator';
import { CommonSuccessResDto } from 'src/common/dto/common-success-res.dto';
import { EErrors } from 'src/common/constants/errors.enum';
import { OperationIds } from 'src/common/constants/operations-ids.enum';
import { AUTH_TAG } from 'src/common/constants/tags';

import { AuthService } from './auth.service';
import { CreateUserReqDto } from './dto/create-user-req.dto';
import { LoginUserResDto } from './dto/login-user-res.dto';
import { LoginUserReqDto } from './dto/login-user-req.dto';

@ApiTags(AUTH_TAG)
@Controller(AUTH_TAG)
@ComposeErrorsDecorator()
@ComposeOthersErrorsDecorator(EErrors.NOT_FOUND_ERROR)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * login
   * @returns {Promise<LoginUserResDto>}
   */
  @Post('/login')
  @ApiOperation({
    description: 'login user',
    operationId: OperationIds.LOGIN,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: LoginUserResDto,
  })
  async login(
    @Body() loginUserReqDto: LoginUserReqDto,
  ): Promise<LoginUserResDto> {
    return await this.authService.login(loginUserReqDto);
  }

  /**
   * signup
   * @returns {Promise<CommonSuccessResDto>}
   */
  @Post('/signup')
  @ApiOperation({
    description: 'creation user',
    operationId: OperationIds.SIGNUP,
  })
  @ApiCreatedResponse({
    status: 200,
    description: 'OK',
    type: CommonSuccessResDto,
  })
  async signup(
    @Body() createUserReqDto: CreateUserReqDto,
  ): Promise<CommonSuccessResDto> {
    return await this.authService.signUp(createUserReqDto);
  }
}
