import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import { LandPageComponent } from './land-page/land-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { SupportComponent } from './support/support.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import type { ThemePalette } from '@angular/material/core/common-behaviors/color';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ListProfilComponent } from './list-profil/list-profil.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { CondidaturesComponent } from './condidature/condidatures/condidatures.component';
import { AddCondidatureComponent } from './condidature/add-condidature/add-condidature.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
//import { NgChartsModule } from 'ng2-charts';
import {MatTooltipModule} from '@angular/material/tooltip';
//import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [

    AppComponent,
    LandPageComponent,
    NavBarComponent,
    AboutComponent,
    SupportComponent,
    ContactComponent,
    SignUpComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    DashboardUserComponent,
    SidenavComponent,
    HeaderComponent,
    ListProfilComponent,
    AddProfilComponent,
    CondidaturesComponent,
    AddCondidatureComponent,
    ProfilListComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    SocialLoginModule,
    MatDialogModule,
    MatTooltipModule,






  ],

  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    },

    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '852541351942-h95qcsrtgpr6grr7mgft6qmjk7bn08d5.apps.googleusercontent.com'
          )
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('3031514320432981')
        }

      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
type CustomThemePalette = ThemePalette | 'secondary' | 'success' | 'alert';
