import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { country } from 'src/app/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {
  @Input() filteredCountries: country[] = []; 

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToCountryDetails(countryName: string): void {
    this.router.navigate(['/main/country', countryName]);
  }
}
