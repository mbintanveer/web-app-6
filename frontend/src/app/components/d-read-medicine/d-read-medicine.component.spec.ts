import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadMedicineComponent } from './d-read-medicine.component';

describe('DReadMedicineComponent', () => {
  let component: DReadMedicineComponent;
  let fixture: ComponentFixture<DReadMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
