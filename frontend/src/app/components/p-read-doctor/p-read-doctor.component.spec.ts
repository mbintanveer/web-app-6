import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadDoctorComponent } from './p-read-doctor.component';

describe('PReadDoctorComponent', () => {
  let component: PReadDoctorComponent;
  let fixture: ComponentFixture<PReadDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReadDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PReadDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
