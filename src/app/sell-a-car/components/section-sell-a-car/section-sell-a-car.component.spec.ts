import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSellACarComponent } from './section-sell-a-car.component';

describe('SectionSellACarComponent', () => {
  let component: SectionSellACarComponent;
  let fixture: ComponentFixture<SectionSellACarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSellACarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSellACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
