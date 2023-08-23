import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-by-region',
  templateUrl: './filter-by-region.component.html',
  styleUrls: ['./filter-by-region.component.scss']
})
export class FilterByRegionComponent {
  showFilter: boolean = false;
  continents = [
    { name: 'Asia', checked: false },
    { name: 'Europe', checked: false },
    { name: 'Oceania', checked: false },
    { name: 'Antarctic', checked: false },
    { name: 'Americas', checked: false },
    { name: 'Africa', checked: false }
  ];

  @Output() filterByContinent: EventEmitter<string[]> = new EventEmitter<string[]>();

  toggleFilter(): void {
    console.log('Hi');
    this.showFilter = !this.showFilter;
  }

  applyFilters(): void {
    const selectedContinents = this.continents.filter(continent => continent.checked).map(continent => continent.name);
    this.filterByContinent.emit(selectedContinents);
  }
}
