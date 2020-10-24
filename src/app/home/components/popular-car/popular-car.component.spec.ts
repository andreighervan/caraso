import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularCarComponent } from './popular-car.component';

describe('PopularCarsComponent', () => {
  let component: PopularCarComponent;
  let fixture: ComponentFixture<PopularCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularCarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
