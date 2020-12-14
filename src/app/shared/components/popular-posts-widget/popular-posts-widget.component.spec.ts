import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PopularPostsWidgetComponent } from './popular-posts-widget.component';

describe('PopularPostsWidgetComponent', () => {
  let component: PopularPostsWidgetComponent;
  let fixture: ComponentFixture<PopularPostsWidgetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularPostsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularPostsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
