import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IglesiaComponent } from './iglesia/iglesia.component';
import { ConexionComponent } from './conexion/conexion.component';
import { BlogComponent } from 'src/app/shared/blog/blog.component';
import { OremosComponent } from 'src/app/shared/oremos/oremos.component';
import { QuienesSomosComponent } from 'src/app/shared/quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conexion', component: ConexionComponent },
  { path: 'iglesia', component: IglesiaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'oremos', component: OremosComponent },
  { path: 'nosotros', component: QuienesSomosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
