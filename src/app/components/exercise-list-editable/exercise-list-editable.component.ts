import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { Training } from 'src/app/models/Training';
import { ExerciseService } from 'src/app/servieces/exercise.service';

@Component({
  selector: 'app-exercise-list-editable',
  templateUrl: './exercise-list-editable.component.html',
  styleUrls: ['./exercise-list-editable.component.css']
})
export class ExerciseListEditableComponent {
 
  @Input() exercise ?:Exercise;
  @Output() exerciseAdded=new EventEmitter<Exercise[]>();
  
 
  
 
  exercises:Exercise[]=[];
  exerciseToEdit?:Exercise;
  trainingToEdit?:Training;
  constructor(private exerciseService:ExerciseService){
    this.exerciseService.getExercises().subscribe((result: Exercise[])=>(this.exercises=result));
    
  }
deleteExercise(exercise:Exercise){
this.exerciseService.deleteExercise(exercise).subscribe((exercises:Exercise[])=>this.exerciseAdded.emit(exercises))
}



initNewExercise(){
  this.exerciseToEdit=new Exercise();

}
initNewTraining(){
  this.trainingToEdit=new Training();

}
editExercise(exercise: Exercise){
  this.exerciseToEdit=exercise;
}


}
