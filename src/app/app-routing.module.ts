import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { MapcompComponent } from './mapcomp/mapcomp.component';
import { TempcompComponent } from './tempcomp/tempcomp.component';
import { ShockcompComponent } from './shockcomp/shockcomp.component';
import { The1compComponent } from './the1comp/the1comp.component';
import { The2compComponent } from './the2comp/the2comp.component';
const routes: Routes = [
  { path: "maps", component: MapcompComponent },
  { path: "temperature", component: TempcompComponent },
  { path: "shock", component: ShockcompComponent },
  {
    path: "shipment",
    component: Sidenav1Component,
    outlet: "sidebar",
    children:[
      {path: "", redirectTo:'/maps(sidebar:shipment)', pathMatch:'full'},
      { path: "maps", redirectTo:'/maps(sidebar:shipment)', pathMatch:'full'},
      {path: "temperature", redirectTo:'/temperature(sidebar:shipment)', pathMatch:'full'},
      {path: "shock", redirectTo:'/shock(sidebar:shipment)', pathMatch:'full'}
    ]
  },
  {
    path: "themes",
    component: Sidenav2Component,
    outlet: "sidebar",
    children:[
      {path: "theme1", redirectTo:'/theme1(sidebar:themes)', pathMatch:'full'},
      {path: "theme2", redirectTo:'/theme2(sidebar:themes)', pathMatch:'full'},
    ]
  },
  { path: "theme1", component: The1compComponent },
  { path: "theme2", component: The2compComponent },
  {
    path:"",
    redirectTo:'/maps(sidebar:shipment)',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
