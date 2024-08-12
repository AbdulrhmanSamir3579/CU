import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStateService } from 'src/app/services/general/user-state.service';
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
    if (this.user.isLoggedIn())
      requestClone = request.clone({
        setHeaders: {
          'Authorization': this.user.isLoggedIn() ? 'Bearer ' + this.user?.token : ''
        }
      })



    return next.handle(requestClone)
  }
}
