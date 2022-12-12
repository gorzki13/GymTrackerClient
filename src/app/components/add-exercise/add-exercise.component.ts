import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseService } from 'src/app/servieces/exercise.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  @Input() exercise ?:Exercise;
  @Output() exerciseAdded=new EventEmitter<Exercise[]>();
  constructor(private exerciseService: ExerciseService){}

  ngOnInit():void
  {

  

  }
  updateExercise(exercise : Exercise)
   {

   }
    deleteExercise(exercise: Exercise)
   {
    
   }
   createExercise(exercise: Exercise)
   {
    this.exerciseService.addExercise(exercise)
    .subscribe((exercises:Exercise[])=>this.exerciseAdded.emit(exercises));
   }

}
