import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpecializationsComponent } from './edit-specializations.component';

describe('EditSpecializationsComponent', () => {
  let component: EditSpecializationsComponent;
  let fixture: ComponentFixture<EditSpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSpecializationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
