import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoorindatorProfileComponent } from './coorindator-profile.component';

describe('CoorindatorProfileComponent', () => {
  let component: CoorindatorProfileComponent;
  let fixture: ComponentFixture<CoorindatorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoorindatorProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CoorindatorProfileComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
