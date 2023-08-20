import { Component, Input } from '@angular/core';
import { country } from 'src/app/country';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent {
  @Input() country: country | undefined;
  @Input() isAdmin: boolean = false;
}
