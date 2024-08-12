import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import {Observable, catchError, tap, throwError} from 'rxjs';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(e => this.throwResponse(e)),
      catchError((error, caught) => this.throwError(error))
    );
  }

  throwResponse(event: HttpEvent<any>) {
    if (!(event instanceof HttpResponse)) return;
  }

  throwError(error: any) {
    // this.toastr.error(error.error.message || error.message)
    console.log(error.error.message || error.message)
    return throwError(() => error)
  }
}
