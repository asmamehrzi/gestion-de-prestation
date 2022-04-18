import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'support',component: SupportComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'sign',component: SignUpComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'dashboard',component: DashboardUserComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'dashbord',component: DashboardComponent}





];

@NgModule({
  declarations: [],
  exports: [
    RouterModule
],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ]
})
export class AppRoutingModule { 
  
}
