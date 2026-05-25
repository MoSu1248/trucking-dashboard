import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartComponent } from './linechart.component';

describe('LinechartComponent', () => {
  let component: LinechartComponent;
  let fixture: ComponentFixture<LinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinechartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinechartComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
