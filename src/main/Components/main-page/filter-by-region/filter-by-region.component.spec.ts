import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByRegionComponent } from './filter-by-region.component';

describe('FilterByRegionComponent', () => {
  let component: FilterByRegionComponent;
  let fixture: ComponentFixture<FilterByRegionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByRegionComponent]
    });
    fixture = TestBed.createComponent(FilterByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
