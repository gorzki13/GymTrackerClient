import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseService } from 'src/app/servieces/exercise.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent {
  
  exercises:Exercise[]=[];
  constructor(private exerciseService:ExerciseService){
    this.exerciseService.getExercises().subscribe((result: Exercise[])=>(this.exercises=result));
    
  }


 

}
