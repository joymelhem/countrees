import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CountryListComponent } from './main-page/country-list/country-list.component';
import { SearchComponent } from './main-page/search/search.component';
import { FilterByRegionComponent } from './main-page/filter-by-region/filter-by-region.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryInfoComponent } from './country-detail/country-info/country-info.component';
import { BorderCountriesComponent } from './country-detail/border-countries/border-countries.component';
import { ImageGalleryComponent } from './country-detail/image-gallery/image-gallery.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    MainPageComponent,
    CountryListComponent,
    SearchComponent,
    FilterByRegionComponent,
    CountryDetailComponent,
    CountryInfoComponent,
    BorderCountriesComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
