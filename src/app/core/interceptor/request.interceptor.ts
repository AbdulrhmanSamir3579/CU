import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TranslationService} from "../services/translation.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private _TranslationService: TranslationService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let requestClone = request.clone({
      setHeaders: {
        'lang': this._TranslationService.defaultLang,
      }
    })
    return next.handle(requestClone)
  }
}
