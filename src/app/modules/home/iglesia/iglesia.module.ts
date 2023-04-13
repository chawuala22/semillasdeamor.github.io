import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IglesiaRoutingModule } from './iglesia-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuestraCoberturaComponent } from './nuestra-cobertura/nuestra-cobertura.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';


@NgModule({
  declarations: [
    HomepageComponent,
    NosotrosComponent,
    NuestraCoberturaComponent,
    TrayectoriaComponent,
    TestimoniosComponent
  ],
  imports: [
    CommonModule,
    IglesiaRoutingModule
  ]
})
export class IglesiaModule { }
