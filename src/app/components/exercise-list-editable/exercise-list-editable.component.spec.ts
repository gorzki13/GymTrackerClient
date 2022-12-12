import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseListEditableComponent } from './exercise-list-editable.component';

describe('ExerciseListEditableComponent', () => {
  let component: ExerciseListEditableComponent;
  let fixture: ComponentFixture<ExerciseListEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseListEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseListEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
