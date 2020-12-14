import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArchivesWidgetComponent } from './archives-widget.component';

describe('ArchivesWidgetComponent', () => {
  let component: ArchivesWidgetComponent;
  let fixture: ComponentFixture<ArchivesWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
