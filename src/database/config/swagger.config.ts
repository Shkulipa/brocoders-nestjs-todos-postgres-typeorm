import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('Brocoders Nestjs Todo API Doc')
  .setVersion('0.0.1') // from package.json
  .addBearerAuth()
  .build();

export default swaggerConfig;
