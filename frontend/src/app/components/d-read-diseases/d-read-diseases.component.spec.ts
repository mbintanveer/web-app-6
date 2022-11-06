import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadDiseasesComponent } from './d-read-diseases.component';

describe('DReadDiseasesComponent', () => {
  let component: DReadDiseasesComponent;
  let fixture: ComponentFixture<DReadDiseasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadDiseasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
