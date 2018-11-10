import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipmentdetailsRoutingModule } from './Shipmentdetails-routing.module';
import { ShipmentdetailsComponent } from "./shipmentdetails.component";
@NgModule({
  imports: [
    CommonModule,
    ShipmentdetailsRoutingModule
  ],
  declarations: [ShipmentdetailsComponent]
})
export class ShipmentdetailsModule { }
