import { Component, OnInit } from '@angular/core';
import { TempservService } from '../tempserv.service';
@Component({
  selector: 'app-shipmentdetails',
  templateUrl: './shipmentdetails.component.html',
  styleUrls: ['./shipmentdetails.component.css']
})
export class ShipmentdetailsComponent implements OnInit {
id;
  constructor(private tempserv: TempservService) {
    this.tempserv.setShow(true);
    this.id=this.tempserv.getShipmentid();
    
  }
  show(){
    return this.tempserv.getShow();
  }
  ngOnInit() {
  }

}
