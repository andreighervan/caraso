import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionOurTeamComponent } from './section-our-team.component';

describe('SectionOurTeamComponent', () => {
  let component: SectionOurTeamComponent;
  let fixture: ComponentFixture<SectionOurTeamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOurTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
