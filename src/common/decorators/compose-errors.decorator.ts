import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiTooManyRequestsResponse,
} from '@nestjs/swagger';

import { EErrors } from 'src/common/constants/errors.enum';
import { CommonServerErrorResDto } from '../dto/common-server-error-res.dto';

/**
 * ComposeErrorsDecorator decorator - composing decorators for errors
 */
export function ComposeErrorsDecorator() {
  const decorators = [
    ApiBadRequestResponse({
      type: CommonServerErrorResDto,
      description: EErrors.BAD_REQUEST_ERROR,
    }),
    ApiInternalServerErrorResponse({
      type: CommonServerErrorResDto,
      description: EErrors.INTERNAL_SERVER_ERROR,
    }),
    ApiTooManyRequestsResponse({
      type: CommonServerErrorResDto,
      description: EErrors.TOO_MANY_REQUESTS,
    }),
  ];

  return applyDecorators(...decorators);
}
