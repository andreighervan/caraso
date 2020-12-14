import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SellACarComponent } from './sell-a-car.component';

describe('SellACarComponent', () => {
  let component: SellACarComponent;
  let fixture: ComponentFixture<SellACarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SellACarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
