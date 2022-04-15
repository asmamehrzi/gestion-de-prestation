import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  loginForm: FormGroup=this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private userService: UserServiceService,private router:Router) { }

  
  
   login(){
      this.userService.getUsersList()
      .subscribe(res=>{
        const user=res.find((a:any)=>{
          return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
        });
        if(user){
          alert("Login Success!!");
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        }else{
          alert("user not found!!");
        }
      },err=>{
        alert("erreur")
      })
    }
      }



// TODO: TO implement user module with signup component , login component ,user badge, user profil
// TODO: To impement user service that talk to to api