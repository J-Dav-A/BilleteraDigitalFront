import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayaout } from './main-layout';

describe('MainLayaout', () => {
  let component: MainLayaout;
  let fixture: ComponentFixture<MainLayaout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainLayaout],
    }).compileComponents();

    fixture = TestBed.createComponent(MainLayaout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
