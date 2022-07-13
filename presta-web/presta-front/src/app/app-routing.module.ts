import { AddCondidatureComponent } from './condidature/add-condidature/add-condidature.component';
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
import { AuthGuard } from './shared/auth.guard';
import { ListProfilComponent } from './list-profil/list-profil.component';
import { CondidaturesComponent } from './condidature/condidatures/condidatures.component';
import { ProfilListComponent } from './profil-list/profil-list.component';

const routes:Routes = [
  {path: '',component: HomeComponent},
  {path: 'about',component: AboutComponent},
  {path: 'support',component: SupportComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'sign',component: SignUpComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'dashboard',component: DashboardUserComponent},
  {path: 'profile',component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'dashbord',component: DashboardComponent},
  {path: 'list-profil',component: ListProfilComponent},
  {path: 'add-condidature',component: AddCondidatureComponent},
  {path: 'condidatures',component: CondidaturesComponent}


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
