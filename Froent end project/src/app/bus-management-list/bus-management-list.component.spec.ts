import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusManagementListComponent } from './bus-management-list.component';

describe('BusManagementListComponent', () => {
  let component: BusManagementListComponent;
  let fixture: ComponentFixture<BusManagementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusManagementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusManagementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
