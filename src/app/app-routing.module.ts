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
import { ShiplistComponent } from './shiplist/shiplist.component';
import { ShipmentdetailsComponent } from './shipmentdetails/shipmentdetails.component';
const routes: Routes = [
  { path: "maps", loadChildren: "./shipmentdetails/shipmentdetails.module#ShipmentdetailsModule", outlet: "sidebar" },
  { path: "maps/:id", loadChildren: "./shipmentdetails/shipmentdetails.module#ShipmentdetailsModule", outlet: "sidebar" },
  { path: "temperature", component: TempcompComponent, outlet: "sidebar" },
  { path: "shock", component: ShockcompComponent, outlet: "sidebar" },
  { path: "theme1", component: The1compComponent, outlet: "sidebar" },
  { path: "theme2", component: The2compComponent, outlet: "sidebar" },
  //{ path: "shipment", component: MapcompComponent, outlet: "sidebar" },
  {
    path: "shipment",
    component: Sidenav1Component,
    children:[
      //{path: "shipment", redirectTo:'/', pathMatch:'full'},
      {path: "maps", redirectTo:'/shipment(sidebar:maps)', pathMatch:'full'},
      {path: "maps/:id", redirectTo:'/shipment(sidebar:maps/:id)', pathMatch:'full'},
      {path: "temperature", redirectTo:'/shipment(sidebar:temperature)', pathMatch:'full'},
      {path: "shock", redirectTo:'/shipment(sidebar:shock)', pathMatch:'full'}
    ]
  },
  {
    path: "themes",
    component: Sidenav2Component,
    children:[
      {path: "theme1", redirectTo:'/themes(sidebar:theme1)', pathMatch:'full'},
      {path: "theme2", redirectTo:'/themes(sidebar:theme2)', pathMatch:'full'},
    ]
  },
  /*{
    path:"shipment(sidebar:shipment)",
    redirectTo:'/',
    pathMatch: 'full'
  },*/
  { path: "", component: ShiplistComponent, outlet: "sidebar" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
