import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { Training } from 'src/app/models/Training';
import { ExerciseService } from 'src/app/servieces/exercise.service';
import { TrainingService } from 'src/app/servieces/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent {
  showContent = false;
trainings:Training[]=[];
exercises:Exercise[]=[];
  

  
  constructor(private trainingService:TrainingService,private exerciseService:ExerciseService){
  this.trainingService.getTrainings().subscribe((result: Training[])=>(this.trainings=result));
  this.exerciseService.getExercises().subscribe((result: Exercise[])=>(this.exercises=result));
}
toggleContent(training:Training) {
  training.display=!training.display;
}

}
