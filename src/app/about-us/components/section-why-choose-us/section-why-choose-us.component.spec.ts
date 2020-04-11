import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhyChooseUsComponent } from './section-why-choose-us.component';

describe('SectionWhyChooseUsComponent', () => {
  let component: SectionWhyChooseUsComponent;
  let fixture: ComponentFixture<SectionWhyChooseUsComponent>;

  beforeEach(async(() => {
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
