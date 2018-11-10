import { ShipmentdetailsModule } from './shipmentdetails.module';

describe('ShipmentdetailsModule', () => {
  let shipmentdetailsModule: ShipmentdetailsModule;

  beforeEach(() => {
    shipmentdetailsModule = new ShipmentdetailsModule();
  });

  it('should create an instance', () => {
    expect(shipmentdetailsModule).toBeTruthy();
  });
});
