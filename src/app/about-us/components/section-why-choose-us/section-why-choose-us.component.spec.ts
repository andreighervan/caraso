import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionWhyChooseUsComponent } from './section-why-choose-us.component';

describe('SectionWhyChooseUsComponent', () => {
  let component: SectionWhyChooseUsComponent;
  let fixture: ComponentFixture<SectionWhyChooseUsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWhyChooseUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
