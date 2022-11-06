import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadDiagnosisComponent } from './p-read-diagnosis.component';

describe('PReadDiagnosisComponent', () => {
  let component: PReadDiagnosisComponent;
  let fixture: ComponentFixture<PReadDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReadDiagnosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PReadDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
