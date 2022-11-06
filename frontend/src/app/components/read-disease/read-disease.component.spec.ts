import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDiseaseComponent } from './read-disease.component';

describe('ReadDiseaseComponent', () => {
  let component: ReadDiseaseComponent;
  let fixture: ComponentFixture<ReadDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
