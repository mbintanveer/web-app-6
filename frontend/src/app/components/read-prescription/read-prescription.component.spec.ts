import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPrescriptionComponent } from './read-prescription.component';

describe('ReadPrescriptionComponent', () => {
  let component: ReadPrescriptionComponent;
  let fixture: ComponentFixture<ReadPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
