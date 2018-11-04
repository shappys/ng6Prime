import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShockcompComponent } from './shockcomp.component';

describe('ShockcompComponent', () => {
  let component: ShockcompComponent;
  let fixture: ComponentFixture<ShockcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShockcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShockcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
