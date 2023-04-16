import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { IglesiaComponent } from './iglesia/iglesia.component';
import { ConexionComponent } from './conexion/conexion.component';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { OremosComponent } from 'src/app/components/oremos/oremos.component';
import { QuienesSomosComponent } from 'src/app/components/quienes-somos/quienes-somos.component';
import { KidsComponent } from 'src/app/components/kids/kids.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conexion', component: ConexionComponent },
  { path: 'iglesia', component: IglesiaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'oremos', component: OremosComponent },
  { path: 'nosotros', component: QuienesSomosComponent },
  { path: 'kids', component: KidsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
