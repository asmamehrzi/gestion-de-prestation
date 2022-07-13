import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  user! : User;
  private endpoint='http://localhost:8080/users';
  private loginUrl='http://localhost:8080/api/login';
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";


  headers = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http:HttpClient,private router:Router) { }

  login(data:any):Observable<any> {
    return this.http.post(`${this.loginUrl}`, data);
      
    }
    getToken() {
      return localStorage.getItem('access_token');
    }
    isLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return authToken !== null ? true : false;
    }
    doLogout() {
      let removeToken = localStorage.removeItem('access_token');
      let removedToken = localStorage.removeItem('refresh_token');

      if (removeToken == null) {
        this.router.navigate(['sign']);
      }
    }
    // User profile
    getUserProfile(id: any): Observable<any> {
      let api = `${this.endpoint}/${id}`;
      return this.http.get(api, { headers: this.headers }).pipe(
        map((res) => {
          console.log(res);
          return res || {};
        }),
        catchError(this.handleError)
      );
    }
    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }
    signIn(user: User) {
      return this.http
        .post<any>(`${this.loginUrl}`, user)
        .subscribe((res: any) => {
          localStorage.setItem('access_token', res.accesstoken);
          localStorage.setItem('refresh_token', res.refreshtoken);
            this.router.navigate(['dashboard']);
          });
        
    }
    GenerateRefreshToken() {
      return this.http.get<any>(`${environment.endpoint}/refreshToken`)
    }
   
    private getRefreshToken() {
      return localStorage.getItem('refresh_token');
    }

   
}
