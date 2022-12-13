import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Exercise } from './models/Exercise';
import { Training } from './models/Training';
import { UserData } from './models/UserData';
import { ExerciseService } from './servieces/exercise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GymTrackerClient';
 exercises:Exercise[]=[];
exerciseToEdit?:Exercise;
trainingToEdit?:Training;
userdataToEdit?:UserData;
constructor(private exerciseService:ExerciseService,public router: Router ){
  router=this.router;
}



ngOnInit () : void {
 
  this.exerciseService.getExercises().subscribe((result: Exercise[])=>(this.exercises=result));

}

initNewExercise(){
  this.exerciseToEdit=new Exercise();

}
initNewTraining(){
  this.trainingToEdit=new Training();

}
initNewUserdata(){
  this.userdataToEdit=new UserData();

}
editExercise(exercise: Exercise){
  this.exerciseToEdit=exercise;
}



}
