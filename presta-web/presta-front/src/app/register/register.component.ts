import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
 registerForm: FormGroup=this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    name: ['', Validators.required],
    lname: ['', Validators.required],
    login: ['', Validators.required],
    
    
  })
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private userService: UserServiceService) { }
  SignUser(){
    this.userService.createUser(this.registerForm.value)
    .subscribe(res=>{
      alert("signup successfull");
      console.log(this.registerForm.value)
      this.registerForm.reset();
    },err=>{
      alert("erreur")
    })
  }
  

}
