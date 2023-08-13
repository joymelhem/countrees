import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { authenticationGuard } from './auth.guard';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainPageComponent, canActivate:['CanActivateFn'] },
  { path: 'country/:countryCode', component: CountryDetailComponent, canActivate:['CanActivateFn'] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
