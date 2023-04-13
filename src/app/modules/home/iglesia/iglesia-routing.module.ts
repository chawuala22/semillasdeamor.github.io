import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NuestraCoberturaComponent } from './nuestra-cobertura/nuestra-cobertura.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { TrayectoriaComponent } from './trayectoria/trayectoria.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
    path: 'nuestra-cobertura',
    component: NuestraCoberturaComponent
  },
  {
    path: 'testimonios',
    component: TestimoniosComponent
  },
  {
    path: 'trayectoria',
    component: TrayectoriaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IglesiaRoutingModule { }
