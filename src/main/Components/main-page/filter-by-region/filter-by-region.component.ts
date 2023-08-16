import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-by-region',
  templateUrl: './filter-by-region.component.html',
  styleUrls: ['./filter-by-region.component.scss']
})
export class FilterByRegionComponent {
  showFilter: boolean = false;

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
