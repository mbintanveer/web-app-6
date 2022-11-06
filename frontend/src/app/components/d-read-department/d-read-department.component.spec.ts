import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DReadDepartmentComponent } from './d-read-department.component';

describe('DReadDepartmentComponent', () => {
  let component: DReadDepartmentComponent;
  let fixture: ComponentFixture<DReadDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DReadDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DReadDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
