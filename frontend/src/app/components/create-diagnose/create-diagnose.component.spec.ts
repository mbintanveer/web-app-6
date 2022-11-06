import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiagnoseComponent } from './create-diagnose.component';

describe('CreateDiagnoseComponent', () => {
  let component: CreateDiagnoseComponent;
  let fixture: ComponentFixture<CreateDiagnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDiagnoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
