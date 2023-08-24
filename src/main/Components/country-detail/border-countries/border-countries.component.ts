import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { country } from 'src/app/country';

@Component({
  selector: 'app-border-countries',
  templateUrl: './border-countries.component.html',
  styleUrls: ['./border-countries.component.scss']
})
export class BorderCountriesComponent {
  @Input() borderCountries: country[] = [];

  constructor(private router: Router) {}

  navigateToCountryDetails(countryName: string): void {
    this.router.navigate(['/main/country', countryName]);
  }
}
