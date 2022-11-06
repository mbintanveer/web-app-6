import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDiagnoseComponent } from './read-diagnose.component';

describe('ReadDiagnoseComponent', () => {
  let component: ReadDiagnoseComponent;
  let fixture: ComponentFixture<ReadDiagnoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDiagnoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDiagnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
