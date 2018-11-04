import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapcompComponent } from './mapcomp.component';

describe('MapcompComponent', () => {
  let component: MapcompComponent;
  let fixture: ComponentFixture<MapcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
