import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarsComponent } from './popular-cars.component';

describe('PopularCarsComponent', () => {
  let component: PopularCarsComponent;
  let fixture: ComponentFixture<PopularCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
