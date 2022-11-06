import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadAppointmentComponent } from './d-read-appointment.component';

describe('DReadAppointmentComponent', () => {
  let component: DReadAppointmentComponent;
  let fixture: ComponentFixture<DReadAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
