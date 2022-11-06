import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiagnoseComponent } from './edit-diagnose.component';

describe('EditDiagnoseComponent', () => {
  let component: EditDiagnoseComponent;
  let fixture: ComponentFixture<EditDiagnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiagnoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
