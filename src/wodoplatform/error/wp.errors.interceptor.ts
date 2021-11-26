import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Observable, throwError, tap } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WPError } from './wp.error';
import { WP_ERROR_BC_GENERAL, WP_ERROR_BC_TYPE, WP_ERROR_BC_WALLET_TYPE, WP_ERROR_INTERNAL_SERVER } from './wp.error.codes';
import { WPExceptionMessage } from './wp.exception.message';

/**
 * Generic error interceptor to intercept errors including (@link WPError) and convert them meaningful HttpExceptions.
 * The interceptor is used with http controller in Nest framework. For that reason, all errors are bundled into HttpException.
 * 
 * Other controllers and transfports should implement different interfeptors in order to do proper exception handling.
 * 
 * Each microservice or modules implemented with nodejs & nest framework should configure and anable the interceptor in their module definitions
 * 
 * ```nodejs
 *  providers: [
 *   {
 *     provide: APP_INTERCEPTOR,
 *     useClass: ErrorsInterceptor,
 *   }, 
 *   AppService
 *  ]
 * ```
 */
@Injectable()
export class WPErrorsInterceptor implements NestInterceptor {

    private readonly logger = new Logger(WPErrorsInterceptor.name);


    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {

        //this.logger.debug('start-class:'+context.getClass().name +"->"+context.getHandler().name);

        //const now = Date.now();
        return next
            .handle()
            .pipe(
                //tap(() => this.logger.debug(`start-class:after... ${Date.now() - now}ms`)),
                catchError(
                    err => throwError(() => {
                        this.logger.log(JSON.stringify(err));
                        let http_status: number = HttpStatus.INTERNAL_SERVER_ERROR;

                        if (err instanceof WPError) {
                            this.logger.log("error is instance of WPError");
                            let wge: WPError = err as WPError;


                            if (wge.getErrorCode().code == WP_ERROR_BC_TYPE.code) {
                                http_status = HttpStatus.BAD_REQUEST;
                            }
                            else if (wge.getErrorCode().code == WP_ERROR_BC_WALLET_TYPE.code) {
                                http_status = HttpStatus.BAD_REQUEST;
                            }
                            else if (wge.getErrorCode().code == WP_ERROR_BC_GENERAL.code) {
                                http_status = HttpStatus.INTERNAL_SERVER_ERROR;
                            }

                            return new HttpException(new WPExceptionMessage(http_status, wge.message, wge.getErrorCode().code, wge.stack), http_status);
                        }
                        else {
                            return new HttpException(new WPExceptionMessage(http_status, err.meesage, WP_ERROR_INTERNAL_SERVER.code, err.stack), http_status);
                        }
                    }
                    )
                )
            );
    }
}
