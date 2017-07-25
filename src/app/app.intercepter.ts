import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor,HttpHandler,HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AppGithubInterceptor implements HttpInterceptor {
 intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

 const authReq = req.clone({

   headers: req.headers.set('Authorization', 'token 9deb25e6412cbedd427f670f2b9a707459f7fb03')

})
  return next.handle(authReq);
}
}

