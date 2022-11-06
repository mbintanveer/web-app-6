import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadDiseaseComponent } from './p-read-disease.component';

describe('PReadDiseaseComponent', () => {
  let component: PReadDiseaseComponent;
  let fixture: ComponentFixture<PReadDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReadDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PReadDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
