import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SectionSearchComponent } from './section-search.component';

describe('SectionSearchComponent', () => {
  let component: SectionSearchComponent;
  let fixture: ComponentFixture<SectionSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
