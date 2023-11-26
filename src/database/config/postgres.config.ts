import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const postgresConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const POSTGRES_HOST = configService.get<string>('POSTGRES_HOST');
    const POSTGRES_PORT = configService.getOrThrow<number>('POSTGRES_PORT');
    const POSTGRES_USERNAME =
      configService.getOrThrow<string>('POSTGRES_USERNAME');
    const POSTGRES_PASSWORD =
      configService.getOrThrow<string>('POSTGRES_PASSWORD');
    const POSTGRES_DATABASE =
      configService.getOrThrow<string>('POSTGRES_DATABASE');

    return {
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USERNAME,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    };
  },
  inject: [ConfigService],
};

export default postgresConfig;
