import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionTestimonialsComponent } from './section-testimonials.component';

describe('SectionTestimonialsComponent', () => {
  let component: SectionTestimonialsComponent;
  let fixture: ComponentFixture<SectionTestimonialsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
