import { BadRequestException } from '@nestjs/common';
import { Transform, TransformFnParams } from 'class-transformer';

const trim = ({ value, key }: TransformFnParams) => {
  if (typeof value !== 'string')
    throw new BadRequestException(`${key} isn't string`);

  return value?.trim();
};

function Trim(): PropertyDecorator {
  return function (target: object, propertyKey: string | symbol) {
    Transform(trim)(target, propertyKey);
  };
}

export default Trim;
