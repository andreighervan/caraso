import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TagsWidgetComponent } from './tags-widget.component';

describe('TagsWidgetComponent', () => {
  let component: TagsWidgetComponent;
  let fixture: ComponentFixture<TagsWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
