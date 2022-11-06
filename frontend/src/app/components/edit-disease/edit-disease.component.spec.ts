import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiseaseComponent } from './edit-disease.component';

describe('EditDiseaseComponent', () => {
  let component: EditDiseaseComponent;
  let fixture: ComponentFixture<EditDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
