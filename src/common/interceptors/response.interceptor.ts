import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response) => {
        // If service already provides message + data
        if (response && typeof response === 'object' && 'data' in response) {
          return {
            success: true,
            message: response.message ?? 'Request successful',
            data: response.data,
          };
        }

        // Normal response including pagination
        return {
          success: true,
          message: 'Request successful',
          data: response,
        };
      }),
    );
  }
}
