import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { verify } from 'jsonwebtoken';
import { Request } from 'express';

@Injectable()
export class ValidationJWTGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    if (!req.headers) {
      return false;
    }
    const token = req.headers.authorization as string;
    if (!token) {
      return false;
    }
    try {
      verify(token.split(' ')[1], 'secretKey');
      return true;
    } catch {
      return false;
    }
  }
}
