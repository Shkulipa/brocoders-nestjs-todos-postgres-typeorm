import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { UserRepositoryModule } from 'src/services/repositories/user/user-repository.module';
import { AuthService } from './auth.service';
import { TokenModule } from 'src/services/token/token.module';

@Module({
  imports: [TokenModule, UserRepositoryModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
