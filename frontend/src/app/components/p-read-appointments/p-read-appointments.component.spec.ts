import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadAppointmentsComponent } from './p-read-appointments.component';

describe('PReadAppointmentsComponent', () => {
  let component: PReadAppointmentsComponent;
  let fixture: ComponentFixture<PReadAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReadAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PReadAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
