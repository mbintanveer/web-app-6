import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDoctorComponent } from './read-doctor.component';

describe('ReadDoctorComponent', () => {
  let component: ReadDoctorComponent;
  let fixture: ComponentFixture<ReadDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
