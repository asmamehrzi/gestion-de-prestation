import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  user!: any;
  isLogin!: boolean; 
  isLoged!: boolean; 
  
  constructor(private authService: SocialAuthService,public authservice: AuthServiceService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.isLogin = (data != null);
        this.user = data;
      }
    );
    
    
  }
  logout() {
    this.authservice.doLogout()
  }
}
