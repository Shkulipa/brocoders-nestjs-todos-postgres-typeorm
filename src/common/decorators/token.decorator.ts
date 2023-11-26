import { ApiProperty } from '@nestjs/swagger';
import { IsJWT, IsNotEmpty, IsString } from 'class-validator';

function Token(): PropertyDecorator {
  return function (target: object, propertyKey: string | symbol) {
    ApiProperty({ required: true, type: String, description: 'jwt token' })(
      target,
      propertyKey,
    );
    IsNotEmpty()(target, propertyKey);
    IsString()(target, propertyKey);
    IsJWT()(target, propertyKey);
  };
}

export default Token;
