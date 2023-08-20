import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { country } from 'src/app/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<country[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => {
        return data.map(country => ({
          name: country.name.common,
          flag: country.flags.png,
          continent: country.region
        }));
      })
    );
  }
  
  getCountryByName(countryName: string): Observable<country | undefined> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => {
        const countryData = data.find(country => country.name.common === countryName);
        if (countryData) {
          const currencyCode = Object.keys(countryData.currencies)[0];
          const currency = countryData.currencies[currencyCode];
          
          return {
            name: countryData.name.common,
            flag: countryData.flags.png,
            continent: countryData.region,
            capital: countryData.capital[0],
            currency: currency.name,
            currencySymbol: currency.symbol,
            language: Object.values(countryData.languages).join(', '),
            population: countryData.population,
            borderCountries: countryData.borders
          };
        }
        return undefined;
      })
    );
  }

  getCountryByCode(countryCode: string): Observable<country | undefined> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => {
        const countryData = data.find(country => country.cca3 === countryCode);
        if (countryData) {
          const currencyCode = Object.keys(countryData.currencies)[0];
          const currency = countryData.currencies[currencyCode];
            
          return {
            name: countryData.name.common,
            flag: countryData.flags.png,
            continent: countryData.region,
            capital: countryData.capital[0],
            currency: currency.name,
            currencySymbol: currency.symbol,
            language: Object.values(countryData.languages).join(', '),
            population: countryData.population,
            borderCountries: countryData.borders
          };
        }
        return undefined;
      })
    );
  }
}
