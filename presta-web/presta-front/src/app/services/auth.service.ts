import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {TokenStorageService} from '../token/token-storage.service';
import { Router } from '@angular/router';

const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
const TOKEN_KEY='AuthToken';




@Injectable({
  providedIn: 'root'
})
export class AuthService {


private loginUrl='http://localhost:8080/api/auth/login';

  constructor(private http:HttpClient,private jwtHelper:JwtHelperService
   , private tokenStorage:TokenStorageService,private router:Router) { 
   
    
   }
  

   login(email:string, password:string){
   return this.http.post<>(this.loginUrl,{email, password},httpOptions)
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