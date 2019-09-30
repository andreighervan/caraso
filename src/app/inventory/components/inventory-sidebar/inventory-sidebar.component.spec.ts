import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySidebarComponent } from './inventory-sidebar.component';

describe('InventorySidebarComponent', () => {
  let component: InventorySidebarComponent;
  let fixture: ComponentFixture<InventorySidebarComponent>;

  beforeEach(async(() => {
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
