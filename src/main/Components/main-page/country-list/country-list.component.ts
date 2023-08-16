import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  continent: string;
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent {
  countries: Country[] = [
    {
      name: 'USA',
      flag: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png', 
      continent: 'North America'
    },
    {
      name: 'China',
      flag: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png', 
      continent: 'Asia'
    },
    {
      name: 'Japan',
      flag: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png',
      continent: 'Asia'
    },
    {
      name: 'Germany',
      flag: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png', 
      continent: 'Europe'
    },
    {
      name: 'Egypt',
      flag: 'https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png', 
      continent: 'Africa'
    },
    {
      name: 'United Kingdom',
      flag: 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png',
      continent: 'Europe'
    },
  ];
}
