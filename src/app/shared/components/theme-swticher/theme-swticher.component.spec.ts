import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSwticherComponent } from './theme-swticher.component';

describe('ThemeSwticherComponent', () => {
  let component: ThemeSwticherComponent;
  let fixture: ComponentFixture<ThemeSwticherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSwticherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeSwticherComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
