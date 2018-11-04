import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { The1compComponent } from './the1comp.component';

describe('The1compComponent', () => {
  let component: The1compComponent;
  let fixture: ComponentFixture<The1compComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ The1compComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(The1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
