import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Training } from 'src/app/models/Training';
import { TrainingService } from 'src/app/servieces/training.service';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent {
  @Input() training ?:Training;
  @Output() trainingAdded=new EventEmitter<Training[]>();
  
  constructor(private trainingService: TrainingService){}

  ngOnInit():void
  {

  

  }
  updateTraining(training : Training)
   {

   }
    deleteTraining(training : Training)
   {
    
   }
   createTraining(training : Training)
   {
    this.trainingService.addTraining(training)
    .subscribe((trainings:Training[])=>this.trainingAdded.emit(trainings));
   }
}
