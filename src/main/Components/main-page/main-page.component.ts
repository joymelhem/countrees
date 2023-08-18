import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/main/services/country.service';
import { country } from 'src/app/country';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  countries: country[] = [];
  filteredCountries: country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.countryService.getCountries().subscribe(countries => {
      this.countries = countries;
      this.filteredCountries = countries; 
    });
  }

  onSearch(searchTerm: string): void {
    this.filteredCountries = this.countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
