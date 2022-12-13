import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/Exercise';
import { ExerciseService } from 'src/app/servieces/exercise.service';

@Component({
  selector: 'app-onerepmaxcalculator',
  templateUrl: './onerepmaxcalculator.component.html',
  styleUrls: ['./onerepmaxcalculator.component.css']
})
export class OnerepmaxcalculatorComponent {
 text="";
  liftkg=0;
  pickedexercise =0;
  exercisereps=0;
  repmax=0;
  exercises:Exercise[]=[];
  constructor(private exerciseService: ExerciseService){
    this.exerciseService.getExercises().subscribe((result: Exercise[])=>(this.exercises=result));
  }


calculate(){

console.log(this.pickedexercise);

switch(this.pickedexercise) { 
  case 1: { 
     this.repmax=this.liftkg;
     break; 
  } 
  case 2: { 
    this.repmax=this.liftkg/0.97;
     break; 
  } 
  case 3: { 
    this.repmax=this.liftkg/0.94;
     break; 
  } 
  case 4: { 
    this.repmax=this.liftkg/0.92;
     break; 
  } 
  case 5: { 
    this.repmax=this.liftkg/0.89;
     break; 
  } 
  case 6: { 
    this.repmax=this.liftkg/0.86;
     break; 
  } 
  case 7: { 
    this.repmax=this.liftkg/0.83;
     break; 
  } 
  case 8: { 
    this.repmax=this.liftkg/0.81;
     break; 
  } 
  case 9: { 
    this.repmax=this.liftkg/0.78;
     break; 
  } 
  case 10: { 
    this.repmax=this.liftkg/0.75;
     break; 
  } 
  case 11: { 
    this.repmax=this.liftkg/0.73;
     break; 
  } 
  case 12: { 
    this.repmax=this.liftkg/0.71;
     break; 
  } 
  case 13: { 
    this.repmax=this.liftkg/0.70;
     break; 
  } 
  case 14: { 
    this.repmax=this.liftkg/0.68;
     break; 
  } 
  case 15: { 
    this.repmax=this.liftkg/0.67;
     break; 
  } 
  case 16: { 
    this.repmax=this.liftkg/0.65;
     break; 
  } 
  case 17: { 
    this.repmax=this.liftkg/0.64;
     break; 
  } 
  case 18: { 
    this.repmax=this.liftkg/0.63;
     break; 
  } 
  case 19: { 
    this.repmax=this.liftkg/0.62;
     break; 
  } 
  case 20: { 
    this.repmax=this.liftkg/0.60;
     break; 
  } 
  default: { 
    this.repmax=this.liftkg/0.55;
     break; 
  } 
} 

this.text="Your one rep max is :"+String(Math.round(this.repmax))+" kg"
}



}
