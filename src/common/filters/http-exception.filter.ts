import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();

    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let error = 'Internal Server Error';

    // ---------------------------------------------
    // TERMINAL LOG
    // ---------------------------------------------

    console.error('\n==============================================');
    console.error('              API EXCEPTION');
    console.error('==============================================');
    console.error(`Method   : ${request.method}`);
    console.error(`URL      : ${request.originalUrl}`);
    console.error(`Status   : ${status}`);

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null
      ) {
        const responseBody = exceptionResponse as any;

        message = responseBody.message ?? message;
        error = responseBody.error ?? error;
      }
    } else if (exception instanceof Error) {
      // ---------------------------------------------
      // Prisma / unknown errors
      // ---------------------------------------------

      console.error('Error Name:', exception.name);
      console.error('Error Message:', exception.message);

      message = 'Internal server error';
      error = exception.name;
    }

    console.error(`Message  : ${message}`);
    console.error('\nException:');
    console.error(exception);
    console.error('\nStack Trace:');
    console.error(exception instanceof Error ? exception.stack : exception);
    console.error('==============================================\n');

    response.status(status).json({
      success: false,
      message,
      error,
      statusCode: status,
      path: request.originalUrl,
      timestamp: new Date().toISOString(),
    });
  }
}
