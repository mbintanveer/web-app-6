import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadMedicineComponent } from './p-read-medicine.component';

describe('PReadMedicineComponent', () => {
  let component: PReadMedicineComponent;
  let fixture: ComponentFixture<PReadMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReadMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PReadMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
