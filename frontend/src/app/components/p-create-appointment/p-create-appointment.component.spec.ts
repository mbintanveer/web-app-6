import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCreateAppointmentComponent } from './p-create-appointment.component';

describe('PCreateAppointmentComponent', () => {
  let component: PCreateAppointmentComponent;
  let fixture: ComponentFixture<PCreateAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCreateAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCreateAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
