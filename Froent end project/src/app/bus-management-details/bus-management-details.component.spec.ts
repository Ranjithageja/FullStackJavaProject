import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusManagementDetailsComponent } from './bus-management-details.component';

describe('BusManagementDetailsComponent', () => {
  let component: BusManagementDetailsComponent;
  let fixture: ComponentFixture<BusManagementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusManagementDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

