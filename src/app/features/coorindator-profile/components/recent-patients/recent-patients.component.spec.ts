import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPatientsComponent } from './recent-patients.component';

describe('RecentPatientsComponent', () => {
  let component: RecentPatientsComponent;
  let fixture: ComponentFixture<RecentPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPatientsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentPatientsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
