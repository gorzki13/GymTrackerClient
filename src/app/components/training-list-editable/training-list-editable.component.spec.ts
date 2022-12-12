import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListEditableComponent } from './training-list-editable.component';

describe('TrainingListEditableComponent', () => {
  let component: TrainingListEditableComponent;
  let fixture: ComponentFixture<TrainingListEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingListEditableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingListEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
