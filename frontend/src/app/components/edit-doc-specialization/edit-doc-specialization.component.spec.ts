import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocSpecializationComponent } from './edit-doc-specialization.component';

describe('EditDocSpecializationComponent', () => {
  let component: EditDocSpecializationComponent;
  let fixture: ComponentFixture<EditDocSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDocSpecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
