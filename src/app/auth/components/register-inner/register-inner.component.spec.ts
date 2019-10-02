import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInnerComponent } from './register-inner.component';

describe('RegisterInnerComponent', () => {
  let component: RegisterInnerComponent;
  let fixture: ComponentFixture<RegisterInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
