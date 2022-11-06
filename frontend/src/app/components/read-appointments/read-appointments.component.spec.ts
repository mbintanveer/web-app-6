import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAppointmentsComponent } from './read-appointments.component';

describe('ReadAppointmentsComponent', () => {
  let component: ReadAppointmentsComponent;
  let fixture: ComponentFixture<ReadAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAppointmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
