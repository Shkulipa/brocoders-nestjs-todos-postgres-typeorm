import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiNotFoundResponse } from '@nestjs/swagger';

import { CommonServerErrorResDto } from '../dto/common-server-error-res.dto';
import { EErrors } from 'src/common/constants/errors.enum';

/**
 * ComposeOthersErrorsDecorator decorator - composing different decorators
 */
export function ComposeOthersErrorsDecorator(...errorResponses: EErrors[]) {
  const type = CommonServerErrorResDto;
  const decorators = errorResponses.map((errorResponse) => {
    if (errorResponse === EErrors.NOT_FOUND_ERROR) {
      return ApiNotFoundResponse({
        type,
        description: EErrors.NOT_FOUND_ERROR,
      });
    }

    if (errorResponse === EErrors.BAD_REQUEST_ERROR) {
      return ApiBadRequestResponse({
        type,
        description: EErrors.BAD_REQUEST_ERROR,
      });
    }
  });
  return applyDecorators(...decorators);
}
