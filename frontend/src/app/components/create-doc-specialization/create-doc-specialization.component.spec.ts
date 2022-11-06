import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDocSpecializationComponent } from './create-doc-specialization.component';

describe('CreateDocSpecializationComponent', () => {
  let component: CreateDocSpecializationComponent;
  let fixture: ComponentFixture<CreateDocSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDocSpecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDocSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
