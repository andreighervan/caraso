import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InventorySidebarComponent } from './inventory-sidebar.component';

describe('InventorySidebarComponent', () => {
  let component: InventorySidebarComponent;
  let fixture: ComponentFixture<InventorySidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventorySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
