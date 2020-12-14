import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InventoryHeaderComponent } from './inventory-header.component';

describe('InventoryHeaderComponent', () => {
  let component: InventoryHeaderComponent;
  let fixture: ComponentFixture<InventoryHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
