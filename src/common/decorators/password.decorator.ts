import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';

type IPassword = Pick<ApiPropertyOptions, 'description'>;

export const maxLengthPass = 50;
export const minLengthPass = 6;

function Password(values: IPassword): PropertyDecorator {
  return function (target: object, propertyKey: string | symbol) {
    ApiProperty({
      required: true,
      type: String,
      description: values.description,
    })(target, propertyKey);
    IsNotEmpty()(target, propertyKey);
    IsString()(target, propertyKey);
    MaxLength(maxLengthPass)(target, propertyKey);
    MinLength(minLengthPass)(target, propertyKey);
    IsStrongPassword(
      {
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      },
      {
        message: `Password must contain at least 1 number, 1 symbol, 1 uppercase letter, and be between ${minLengthPass} and ${maxLengthPass} characters long. Example: 123456A@a`,
      },
    )(target, propertyKey);
  };
}

export default Password;
