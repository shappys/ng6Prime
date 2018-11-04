import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { The2compComponent } from './the2comp.component';

describe('The2compComponent', () => {
  let component: The2compComponent;
  let fixture: ComponentFixture<The2compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ The2compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(The2compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
