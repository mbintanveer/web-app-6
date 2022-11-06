import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDocSpecializationComponent } from './read-doc-specialization.component';

describe('ReadDocSpecializationComponent', () => {
  let component: ReadDocSpecializationComponent;
  let fixture: ComponentFixture<ReadDocSpecializationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadDocSpecializationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDocSpecializationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
