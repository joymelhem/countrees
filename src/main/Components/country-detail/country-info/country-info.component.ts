import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent {
  @Input() countryName: string = '';
  @Input() capital: string = '';
  @Input() population: number = 0;
  @Input() officialLanguage: string = '';
  @Input() government: string = '';
  @Input() majorCities: string = '';
  @Input() economy: string = '';
  @Input() historyCulture: string = '';
  @Input() isAdmin: boolean = false;
}