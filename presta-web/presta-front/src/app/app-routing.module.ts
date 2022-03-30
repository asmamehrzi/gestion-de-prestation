import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SupportComponent } from './support/support.component';

const routes:Routes = [
  {path: 'about',component: AboutComponent},
  {path: 'support',component: SupportComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'sign',component: SignUpComponent}

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
