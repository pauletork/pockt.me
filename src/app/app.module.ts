import { environment } from './../environments/environment.prod';
import { AuthService } from './services/auth.service';
import { UiService } from './services/ui.service';
import { DashboardService } from './services/dashboard.service';
import { UserGuard } from './user.guard';
import { ScriptLoaderService } from './services/script-loader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './intro/login/login.component';
import { SignupComponent } from './intro/signup/signup.component';
import { RecoverPasswordComponent } from './intro/recover-password/recover-password.component';
import { HomeComponent } from './intro/home/home.component';
import { ErrorComponent } from './intro/error/error.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { PrivacyComponent } from './info/privacy/privacy.component';
import { TermsComponent } from './info/terms/terms.component';
import { LinksComponent } from './dashboard/links/links.component';
import { TopbarComponent } from './dashboard/topbar/topbar.component';
import { BreadcrumbComponent } from './dashboard/breadcrumb/breadcrumb.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { LogHeaderComponent } from './intro/log-header/log-header.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RecoverPasswordComponent,
    HomeComponent,
    ErrorComponent,
    DashboardComponent,
    ActivityComponent,
    EditProfileComponent,
    PrivacyComponent,
    TermsComponent,
    LinksComponent,
    TopbarComponent,
    BreadcrumbComponent,
    FooterComponent,
    LogHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ScriptLoaderService, UserGuard, DashboardService, UiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
