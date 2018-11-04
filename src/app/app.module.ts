import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { MapcompComponent } from './mapcomp/mapcomp.component';
import { TempcompComponent } from './tempcomp/tempcomp.component';
import { ShockcompComponent } from './shockcomp/shockcomp.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { The1compComponent } from './the1comp/the1comp.component';
import { The2compComponent } from './the2comp/the2comp.component';

@NgModule({
  declarations: [
    AppComponent,
    Sidenav1Component,
    MapcompComponent,
    TempcompComponent,
    ShockcompComponent,
    Sidenav2Component,
    The1compComponent,
    The2compComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
