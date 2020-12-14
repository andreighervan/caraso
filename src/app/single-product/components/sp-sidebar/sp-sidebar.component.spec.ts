import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpSidebarComponent } from './sp-sidebar.component';

describe('SpSidebarComponent', () => {
  let component: SpSidebarComponent;
  let fixture: ComponentFixture<SpSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
