import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSpecializationsComponent } from './read-specializations.component';

describe('ReadSpecializationsComponent', () => {
  let component: ReadSpecializationsComponent;
  let fixture: ComponentFixture<ReadSpecializationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadSpecializationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSpecializationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
