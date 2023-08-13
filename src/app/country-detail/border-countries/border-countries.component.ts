import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-border-countries',
  templateUrl: './border-countries.component.html',
  styleUrls: ['./border-countries.component.scss']
})
export class BorderCountriesComponent {
  @Input() borderCountries!: { name: string }[];
}