import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpMainComponent } from './sp-main.component';

describe('SpMainComponent', () => {
  let component: SpMainComponent;
  let fixture: ComponentFixture<SpMainComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
