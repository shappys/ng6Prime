import { Component, OnInit, OnDestroy } from '@angular/core';
import { TempdatservService } from '../tempdatserv.service';
import { TempservService } from '../tempserv.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shiplist',
  templateUrl: './shiplist.component.html',
  styleUrls: ['./shiplist.component.css']
})
export class ShiplistComponent implements OnInit, OnDestroy {
  shiplist: TempdatservService[];
  constructor(private tempserv: TempservService,private router:Router) {this.tempserv.setShow(false); }

  ngOnInit() {
      this.tempserv.getData().then(shiplist => this.shiplist = shiplist);
      this.tempserv.setShow(false);
  }
  show(){
    return this.tempserv.getShow();
  }
  setShipmentid(id){
    this.tempserv.setShipmentid(id);
    this.tempserv.setShow(true);
    this.router.navigate([{outlets: {primary: 'shipment' ,sidebar: 'maps/:id'}}]);
    console.log(this.tempserv.getShipmentid());
  }
  ngOnDestroy(){
    this.tempserv.setShow(true);
  }
}
