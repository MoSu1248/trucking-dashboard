import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesTableComponent } from './nurses-table.component';

describe('NursesTableComponent', () => {
  let component: NursesTableComponent;
  let fixture: ComponentFixture<NursesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursesTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NursesTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
