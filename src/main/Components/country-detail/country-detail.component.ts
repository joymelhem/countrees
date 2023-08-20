import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from 'src/main/services/country.service';
import { country } from 'src/app/country';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {
  country: country | undefined;
  borderCountriesData: country[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('name');
    if (countryName) {
      this.countryService.getCountryByName(countryName).subscribe(country => {
        this.country = country;

        if (country?.borderCountries) {
          const borderCountryObservables = country.borderCountries.map(code =>
            this.countryService.getCountryByCode(code)
          );

          forkJoin(borderCountryObservables).subscribe(data => {
            this.borderCountriesData = data.filter(d => !!d) as country[];
          });
        }
      });
    }
  }
}
