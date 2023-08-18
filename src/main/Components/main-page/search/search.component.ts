import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchCountry: EventEmitter<string> = new EventEmitter<string>();

  onSearch(searchTerm: string): void {
    this.searchCountry.emit(searchTerm);
  }
}
