import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraCoberturaComponent } from './nuestra-cobertura.component';

describe('NuestraCoberturaComponent', () => {
  let component: NuestraCoberturaComponent;
  let fixture: ComponentFixture<NuestraCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestraCoberturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestraCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
