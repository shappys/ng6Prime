import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentdetailsComponent } from './shipmentdetails.component';

describe('ShipmentdetailsComponent', () => {
  let component: ShipmentdetailsComponent;
  let fixture: ComponentFixture<ShipmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
