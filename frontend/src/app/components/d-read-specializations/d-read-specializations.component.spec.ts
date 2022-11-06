import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadSpecializationsComponent } from './d-read-specializations.component';

describe('DReadSpecializationsComponent', () => {
  let component: DReadSpecializationsComponent;
  let fixture: ComponentFixture<DReadSpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadSpecializationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
