import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliveryPersonComponent } from './admin-delivery-person.component';

describe('AdminDeliveryPersonComponent', () => {
  let component: AdminDeliveryPersonComponent;
  let fixture: ComponentFixture<AdminDeliveryPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeliveryPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeliveryPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
