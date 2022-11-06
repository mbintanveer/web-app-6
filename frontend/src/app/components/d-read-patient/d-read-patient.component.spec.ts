import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadPatientComponent } from './d-read-patient.component';

describe('DReadPatientComponent', () => {
  let component: DReadPatientComponent;
  let fixture: ComponentFixture<DReadPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
