import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsTableComponent } from './coordinators-table.component';

describe('CoordinatorsTableComponent', () => {
  let component: CoordinatorsTableComponent;
  let fixture: ComponentFixture<CoordinatorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatorsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoordinatorsTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
