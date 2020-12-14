import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopularCarComponent } from './popular-car.component';

describe('PopularCarsComponent', () => {
  let component: PopularCarComponent;
  let fixture: ComponentFixture<PopularCarComponent>;

  beforeEach(waitForAsync(() => {
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
