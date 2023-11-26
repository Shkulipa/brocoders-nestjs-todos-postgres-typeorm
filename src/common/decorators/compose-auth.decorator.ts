import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';

import { EErrors } from '../constants/errors.enum';
import { AuthGuard } from '../guards/auth.guard';

// ComposeAuthDecorator decorator - composing decorators for auth: Guards, ApiBearerAuth, ApiUnauthorizedResponse
export function ComposeAuthDecorator() {
  const decorators = [
    ApiBearerAuth(),
    ApiUnauthorizedResponse({
      type: Error,
      description: EErrors.UNAUTHORIZED,
    }),
  ];

  const guards = [AuthGuard];

  return applyDecorators(...decorators, UseGuards(...guards));
}
