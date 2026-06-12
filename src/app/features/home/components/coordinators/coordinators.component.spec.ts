import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsComponent } from './coordinators.component';

describe('CoordinatorsComponent', () => {
  let component: CoordinatorsComponent;
  let fixture: ComponentFixture<CoordinatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinatorsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoordinatorsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
