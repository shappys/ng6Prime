import { Component, OnInit, OnDestroy } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { TempservService } from './tempserv.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
      trigger('overlayState', [
          state('hidden', style({
              opacity: 0
          })),
          state('visible', style({
              opacity: 1
          })),
          transition('visible => hidden', animate('400ms ease-in')),
          transition('hidden => visible', animate('400ms ease-out'))
      ]),

      trigger('notificationTopbar', [
        state('hidden', style({
          height: '0',
          opacity: 0
        })),
        state('visible', style({
          height: '*',
          opacity: 1
        })),
        transition('visible => hidden', animate('400ms ease-in')),
        transition('hidden => visible', animate('400ms ease-out'))
      ])
  ],
})
export class AppComponent implements OnInit, OnDestroy{
    menuActive: boolean;
    activeMenuId: string;
    activeTopMenuId: string;
    firstTopMenuId:boolean=true;
    notification: boolean = false;
    currentUrl: string;
    constructor(private router: Router, private tempserv:TempservService) {
      this.tempserv.setShow(true);
      router.events.subscribe((_: NavigationEnd) => {
        if(!!_.url){
        this.currentUrl = _.url
        console.log(this.currentUrl);
        
        }
      });      
    }
    ngOnInit() {
      setTimeout(()=>this.notification = true , 1000);
    }
    onMenuButtonClick(event: Event) {
        this.menuActive = !this.menuActive;
        event.preventDefault();
    }

    closeNotification(event) {
      this.notification = false;
      event.preventDefault();
    }
    show(){
      return this.tempserv.getShow();
    }
    ngOnDestroy(){
      this.tempserv.setShow(false);
    }
  
}