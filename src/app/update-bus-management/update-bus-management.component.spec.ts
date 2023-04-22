import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusManagementComponent } from './update-bus-management.component';

describe('UpdateBusManagementComponent', () => {
  let component: UpdateBusManagementComponent;
  let fixture: ComponentFixture<UpdateBusManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBusManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBusManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
