import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { CountryDetailComponent } from './Components/country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: MainPageComponent,  canActivate:['CanActivateFn'] },
  { path: 'country/:name', component: CountryDetailComponent, canActivate:['CanActivateFn'] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
