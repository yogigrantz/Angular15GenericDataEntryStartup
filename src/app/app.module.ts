import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MasterPageComponent } from './app.MasterPage.component';

@NgModule({
  declarations: [
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class AppModule { }
