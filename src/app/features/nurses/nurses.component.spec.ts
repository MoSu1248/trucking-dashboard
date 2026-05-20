import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NursesComponent } from './nurses.component';

describe('NursesComponent', () => {
  let component: NursesComponent;
  let fixture: ComponentFixture<NursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NursesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NursesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
