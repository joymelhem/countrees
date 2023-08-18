import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-border-countries',
  templateUrl: './border-countries.component.html',
  styleUrls: ['./border-countries.component.scss']
})
export class BorderCountriesComponent {
  @Input() borderCountries: { name: string }[] = [];

  constructor(private router: Router) {}

  navigateToCountry(countryName: string): void {
    this.router.navigate(['/country-details', countryName]);
  }
}
