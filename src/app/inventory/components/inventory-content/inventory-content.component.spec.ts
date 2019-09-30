import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryContentComponent } from './inventory-content.component';

describe('InventoryContentComponent', () => {
  let component: InventoryContentComponent;
  let fixture: ComponentFixture<InventoryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
