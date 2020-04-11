import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWelcomeMessageComponent } from './section-welcome-message.component';

describe('SectionWelcomeMessageComponent', () => {
  let component: SectionWelcomeMessageComponent;
  let fixture: ComponentFixture<SectionWelcomeMessageComponent>;

  beforeEach(async(() => {
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
