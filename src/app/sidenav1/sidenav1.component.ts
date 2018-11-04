import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-sidenav1',
  templateUrl: './sidenav1.component.html',
  styleUrls: ['./sidenav1.component.css']
})
export class Sidenav1Component implements OnInit, OnDestroy {

  /*constructor(private route:Router){

    this.routeEvent(this.route);
  
  }
  routeEvent(router: Router){
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log(e)
      }
    });
  }*/
  firstMenuId=true;
  ngOnInit() {
  }
  
// ... your class variables here
navigationSubscription;
constructor(
  // … your declarations here
  private router: Router,
 ) {
  // subscribe to the router events - storing the subscription so
  // we can unsubscribe later. 
  this.navigationSubscription = this.router.events.subscribe((e: any) => {
    // If it is a NavigationEnd event re-initalise the component
    if (e instanceof NavigationEnd) {
      this.initialiseInvites();
    }
  });
}

initialiseInvites() {
  // Set default values and re-fetch any data you need.
}
ngOnDestroy() {
   // avoid memory leaks here by cleaning up after ourselves. If we  
   // don't then we will continue to run our initialiseInvites()   
   // method on every navigationEnd event.
   if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
      console.log('unsub!');
   }
 }
}
