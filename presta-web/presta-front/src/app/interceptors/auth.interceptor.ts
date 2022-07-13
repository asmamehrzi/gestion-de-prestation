import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  refresh = false;
  static accessToken = '';

  constructor(private authService: AuthServiceService,private http : HttpClient) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
      const authToken = this.authService.getToken();
      const req = request.clone({
          setHeaders: {
            Authorization: `Bearer ${AuthInterceptor.accessToken}`
          }
      });
      return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
        if (err.status === 403 && !this.refresh) {
          this.refresh = true;
  
          return this.http.get('http://localhost:8080/users/refreshToken').pipe(
            switchMap((res: any) => {
              console.log(res);
              AuthInterceptor.accessToken = res.accesstoken;
  
              return next.handle(request.clone({
                setHeaders: {
                  Authorization: `Bearer ${AuthInterceptor.accessToken}`
                }
              }));
            })
          );
        }
        this.refresh = false;
        return throwError(() => err);
      }));
    }
  
 /*static accessToken = '';
 refresh = false;
  constructor(private http:HttpClient) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req =request.clone({
      setHeaders: {
            Authorization:`Bearer ${AuthInterceptor.accessToken}`
      }
    });
    console.log(req)

    return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
      if (err.status === 403 || err.status===401) {
          
        return this.http.get('http://localhost:8080/users/refreshToken')
        .pipe(switchMap((res: any) => {
          AuthInterceptor.accessToken = res.accesstoken;

          return next.handle(request.clone({
            setHeaders: {
              Authorization: `Bearer ${AuthInterceptor.accessToken}`
              }
            }));
          })
        );
      }
      return throwError(() => err);
    }));
  }*/
}
