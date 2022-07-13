import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 registerForm: FormGroup=this.formBuilder.group({
  username: ['', Validators.required],
  email: ['', Validators.required],
  password: ['', Validators.required],
  
    
    
  })
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private userservice: UserServiceService,private router :Router) { }
  SignUser(){
    this.userservice.createUser(this.registerForm.value)
    .subscribe(res=>{
      alert("signup successfull");
      console.log(this.registerForm.value)
      this.registerForm.reset();
      this.router.navigate(['/sign']);
    },err=>{
      alert("erreur")
    })
  }
  

}
