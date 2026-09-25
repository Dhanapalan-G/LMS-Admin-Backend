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
        // --------------------------------------------------
        // SERVICE RESPONSE HAS message + data
        // --------------------------------------------------

        if (
          response &&
          typeof response === 'object' &&
          'message' in response &&
          'data' in response
        ) {
          return {
            success: true,
            message: response.message ?? 'Request successful',
            data: response.data,
          };
        }

        // --------------------------------------------------
        // SERVICE RESPONSE HAS message + items/meta
        // --------------------------------------------------

        if (response && typeof response === 'object' && 'message' in response) {
          const { message, ...data } = response;

          return {
            success: true,
            message: message ?? 'Request successful',
            data,
          };
        }

        // --------------------------------------------------
        // NORMAL RESPONSE
        // --------------------------------------------------

        return {
          success: true,
          message: 'Request successful',
          data: response,
        };
      }),
    );
  }
}
