import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPostsWidgetComponent } from './popular-posts-widget.component';

describe('PopularPostsWidgetComponent', () => {
  let component: PopularPostsWidgetComponent;
  let fixture: ComponentFixture<PopularPostsWidgetComponent>;

  beforeEach(async(() => {
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
