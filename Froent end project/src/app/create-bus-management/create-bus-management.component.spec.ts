import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBusManagementComponent } from './create-bus-management.component';

describe('CreateBusManagementComponent', () => {
  let component: CreateBusManagementComponent;
  let fixture: ComponentFixture<CreateBusManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBusManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBusManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
