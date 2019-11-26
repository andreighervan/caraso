import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpMainComponent } from './sp-main.component';

describe('SpMainComponent', () => {
  let component: SpMainComponent;
  let fixture: ComponentFixture<SpMainComponent>;

  beforeEach(async(() => {
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
