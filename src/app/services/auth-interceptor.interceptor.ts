import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(public loginservice: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  let token=this.loginservice.getToken()
if(token!=null){
   request = request.clone({setHeaders: {Authorization: `Bearer ${this.loginservice.getToken()}`  
}  
});
  return next.handle(request);
}

return next.handle(request);
  
  }
}
