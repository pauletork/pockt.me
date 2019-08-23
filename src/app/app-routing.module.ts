import { LinksComponent } from './dashboard/links/links.component';
import { EditProfileComponent } from './dashboard/edit-profile/edit-profile.component';
import { ActivityComponent } from './dashboard/activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TermsComponent } from './info/terms/terms.component';
import { PrivacyComponent } from './info/privacy/privacy.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './intro/home/home.component';
import { ErrorComponent } from './intro/error/error.component';
import { RecoverPasswordComponent } from './intro/recover-password/recover-password.component';
import { SignupComponent } from './intro/signup/signup.component';
import { LoginComponent } from './intro/login/login.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgot-password', component: RecoverPasswordComponent},
  {path: 'privacy-policy', component: PrivacyComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'activity', component: ActivityComponent},
  {path: 'links', component: LinksComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
