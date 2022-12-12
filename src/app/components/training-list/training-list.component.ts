import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Training } from 'src/app/models/Training';
import { TrainingService } from 'src/app/servieces/training.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent {

trainings:Training[]=[];
constructor(private trainingService:TrainingService){
  this.trainingService.getTrainings().subscribe((result: Training[])=>(this.trainings=result));
}


}
