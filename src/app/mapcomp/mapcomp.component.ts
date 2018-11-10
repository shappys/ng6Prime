import { Component, OnInit } from '@angular/core';
import { TempservService } from '../tempserv.service';
@Component({
  selector: 'app-mapcomp',
  templateUrl: './mapcomp.component.html',
  styleUrls: ['./mapcomp.component.css']
})
export class MapcompComponent implements OnInit {

  constructor(private tempserv: TempservService) { }
  getShipment(){
    console.log(this.tempserv.getShipment());
    return this.tempserv.getShipment();
    
  }
  ngOnInit() {
  }

}
