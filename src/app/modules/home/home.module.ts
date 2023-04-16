import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IglesiaComponent } from './iglesia/iglesia.component';
import { ConexionComponent } from './conexion/conexion.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HomepageComponent } from './iglesia/homepage/homepage.component';
import { NosotrosComponent } from './iglesia/nosotros/nosotros.component';
import { NuestraCoberturaComponent } from './iglesia/nuestra-cobertura/nuestra-cobertura.component';
import { TrayectoriaComponent } from './iglesia/trayectoria/trayectoria.component';
import { TestimoniosComponent } from './iglesia/testimonios/testimonios.component';
import { OremosComponent } from 'src/app/components/oremos/oremos.component';
import { BlogComponent } from 'src/app/components/blog/blog.component';
import { QuienesSomosComponent } from 'src/app/components/quienes-somos/quienes-somos.component';

import { SwiperModule } from 'swiper/angular';
import { KidsComponent } from 'src/app/components/kids/kids.component';
@NgModule({
  declarations: [
    HomeComponent,
    IglesiaComponent,
    ConexionComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    NosotrosComponent,
    NuestraCoberturaComponent,
    TrayectoriaComponent,
    TestimoniosComponent,
    BlogComponent,
    OremosComponent,
    QuienesSomosComponent,
    KidsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
