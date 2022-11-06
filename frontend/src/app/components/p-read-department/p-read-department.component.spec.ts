import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PReadDepartmentComponent } from './p-read-department.component';

describe('PReadDepartmentComponent', () => {
  let component: PReadDepartmentComponent;
  let fixture: ComponentFixture<PReadDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PReadDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PReadDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
