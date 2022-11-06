import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadDiagnoseComponent } from './d-read-diagnose.component';

describe('DReadDiagnoseComponent', () => {
  let component: DReadDiagnoseComponent;
  let fixture: ComponentFixture<DReadDiagnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadDiagnoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
