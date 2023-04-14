import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IglesiaComponent } from './iglesia/iglesia.component';
import { ConexionComponent } from './conexion/conexion.component';
import { NosotrosComponent } from './iglesia/nosotros/nosotros.component';
import { NuestraCoberturaComponent } from './iglesia/nuestra-cobertura/nuestra-cobertura.component';
import { TestimoniosComponent } from './iglesia/testimonios/testimonios.component';
import { TrayectoriaComponent } from './iglesia/trayectoria/trayectoria.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conexion', component: ConexionComponent },
  { path: 'iglesia', component: IglesiaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
