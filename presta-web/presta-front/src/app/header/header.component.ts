import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  user!:any;
  isLogin!: boolean; 
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe(
      data => {
        this.isLogin = (data != null);
        this.user = data;
      }
    );
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
}
