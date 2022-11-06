import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMedicinesComponent } from './read-medicines.component';

describe('ReadMedicinesComponent', () => {
  let component: ReadMedicinesComponent;
  let fixture: ComponentFixture<ReadMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
