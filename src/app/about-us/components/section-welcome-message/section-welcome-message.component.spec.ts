import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionWelcomeMessageComponent } from './section-welcome-message.component';

describe('SectionWelcomeMessageComponent', () => {
  let component: SectionWelcomeMessageComponent;
  let fixture: ComponentFixture<SectionWelcomeMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWelcomeMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWelcomeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
