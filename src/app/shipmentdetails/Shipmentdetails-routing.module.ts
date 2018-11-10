import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShipmentdetailsComponent } from './shipmentdetails.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
const routes: Routes = [
  {
    path: '',
    component: ShipmentdetailsComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class ShipmentdetailsRoutingModule { }
