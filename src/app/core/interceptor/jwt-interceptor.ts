import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthToken } from '../model/token';
import { JWTOptions } from '../model/option';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class JWTInterceptor implements HttpInterceptor {
  constructor(private storage: StorageService, private options: JWTOptions) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const auth: AuthToken = (!!this.options.key && this.storage.get(this.options.key)) || {};
    if (auth) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${auth.access_token}` } });
    }
    return next.handle(req);
  }
}
