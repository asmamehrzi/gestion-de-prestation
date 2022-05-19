import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorageService} from '../token/token-storage.service';
import { Router } from '@angular/router';
import { AuthLoginInfo } from '../model/login-info';
import { JwtResponse } from '../model/jwt-response';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
const TOKEN_KEY='AuthToken';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currentUserSubject!:BehaviorSubject<any>;
public currentUser!:Observable<any>;
private loginUrl='http://localhost:8080/api/auth/login';

  constructor(private http:HttpClient,private jwtHelper:JwtHelperService
   , private tokenStorage:TokenStorageService,private router:Router) { 
    this.currentUserSubject=new BehaviorSubject<any>(sessionStorage.getItem(TOKEN_KEY));
    
   }
   public get currentUserValue():any {
     return this.currentUserSubject.value;
   }

   login(email:string, password:string){
   return this.http.post<JwtResponse>(this.loginUrl,{email, password},httpOptions)
   .pipe(map(data=>{
     this.saveUserData(data);
    return data;

   }));
  }
   
   private saveUserData(data:any){
     this.tokenStorage.saveToken(data.accessToken);
     this.tokenStorage.saveUsername(data.username);
     this.tokenStorage.saveAuthorities(data.authorities);
   }

  }