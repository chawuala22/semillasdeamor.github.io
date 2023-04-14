import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { BlogComponent } from './shared/blog/blog.component';
import { OremosComponent } from './shared/oremos/oremos.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    OremosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
