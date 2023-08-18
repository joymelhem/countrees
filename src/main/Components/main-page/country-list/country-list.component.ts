import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { country } from 'src/app/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  @Input() countries: country[] = [];

  constructor(private router: Router) {}

  navigateToCountryDetails(countryName: string): void {
    this.router.navigate(['/main/country', countryName]); 
  }
}
