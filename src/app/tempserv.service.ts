import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TempdatservService } from './tempdatserv.service';
@Injectable({
  providedIn: 'root'
})
export class TempservService {
  constructor(private http: HttpClient) {}
  show:boolean;
  id:string;
  setShow(show){
    this.show=show;
  }
  getShow(){
    return this.show;
  }
  setShipmentid(id){
    this.id=id;
  }
  getShipmentid(){
    return this.id;
  }
    getData() {
        return this.http.get('/assets/showcase/resources/tempdata.json')
                    .toPromise()
                    .then(res => <TempdatservService[]> res["data"])
                    .then(data => { return data; });
    }
}
