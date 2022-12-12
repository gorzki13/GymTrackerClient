import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from 'src/app/models/Training';
import { TrainingService } from 'src/app/servieces/training.service';

@Component({
  selector: 'app-training-list-editable',
  templateUrl: './training-list-editable.component.html',
  styleUrls: ['./training-list-editable.component.css']
})
export class TrainingListEditableComponent {
  @Input() training ?:Training;
  @Output() trainingAdded=new EventEmitter<Training[]>();
  
 
 
 
  trainings:Training[]=[];
  constructor(private trainingService:TrainingService){
    this.trainingService.getTrainings().subscribe((result: Training[])=>(this.trainings=result));
    
  }
  deleteTraining(training:Training){
this.trainingService.deleteTrainings(training).subscribe((trainings:Training[])=>this
.trainingAdded.emit(trainings))
}

}
