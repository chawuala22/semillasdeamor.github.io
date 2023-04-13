import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OremosComponent } from './oremos.component';

describe('OremosComponent', () => {
  let component: OremosComponent;
  let fixture: ComponentFixture<OremosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OremosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OremosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
