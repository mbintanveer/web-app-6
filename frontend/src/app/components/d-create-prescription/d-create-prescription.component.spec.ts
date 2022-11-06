import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCreatePrescriptionComponent } from './d-create-prescription.component';

describe('DCreatePrescriptionComponent', () => {
  let component: DCreatePrescriptionComponent;
  let fixture: ComponentFixture<DCreatePrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCreatePrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCreatePrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
