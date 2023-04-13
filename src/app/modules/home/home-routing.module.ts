import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IglesiaComponent } from './iglesia/iglesia.component';
import { ConexionComponent } from './conexion/conexion.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'iglesia', component : IglesiaComponent},
  {path : 'conexion', component : ConexionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
