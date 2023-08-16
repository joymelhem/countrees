import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { CountryListComponent } from './Components/main-page/country-list/country-list.component';
import { SearchComponent } from './Components/main-page/search/search.component';
import { FilterByRegionComponent } from './Components/main-page/filter-by-region/filter-by-region.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CountryDetailComponent } from './Components/country-detail/country-detail.component';
import { BorderCountriesComponent } from './Components/country-detail/border-countries/border-countries.component';
import { CountryInfoComponent } from './Components/country-detail/country-info/country-info.component';
import { ImageGalleryComponent } from './Components/country-detail/image-gallery/image-gallery.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    BorderCountriesComponent,
    CountryInfoComponent,
    ImageGalleryComponent,
    CountryDetailComponent,
    CountryListComponent,
    SearchComponent,
    FilterByRegionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatIconModule,
    MainRoutingModule
  ]
})
export class MainModule { }
