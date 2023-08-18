import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { country } from 'src/app/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,flags,region';

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
          return {
            name: countryData.name.common,
            flag: countryData.flags.png,
            continent: countryData.region
          };
        }
        return undefined;
      })
    );
  }
}
