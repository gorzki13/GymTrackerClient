import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { Training } from 'src/app/models/Training';
import { ExerciseService } from 'src/app/servieces/exercise.service';
import { TrainingService } from 'src/app/servieces/training.service';

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {
  @Input() exercise ?:Exercise;
  @Output() exerciseAdded=new EventEmitter<Exercise[]>();
  trainings:Training[]=[];
  
  constructor(private exerciseService: ExerciseService,private trainingService:TrainingService){
    this.trainingService.getTrainings().subscribe((result: Training[])=>(this.trainings=result));
  }

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
