import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorStatisticsComponent } from './coordinator-statistics.component';

describe('CoordinatorStatisticsComponent', () => {
  let component: CoordinatorStatisticsComponent;
  let fixture: ComponentFixture<CoordinatorStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatorStatisticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoordinatorStatisticsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
