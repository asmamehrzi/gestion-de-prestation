import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../services/auth-service.service';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any  ;
  constructor( public authService: AuthServiceService,private actRoute: ActivatedRoute ,private http:HttpClient) {
   /* let id = this.actRoute.snapshot.paramMap.get('id');
    this.authService.getUserProfile(id).subscribe((res) => {
      this.currentUser = res.username;
    });*/
  }

  ngOnInit(): void {
    this.http.get(`${environment.endpoint}/profile`).subscribe
    (res => {
    this.user = res;
    console.log(this.user.username);
  });
    
  }

}
