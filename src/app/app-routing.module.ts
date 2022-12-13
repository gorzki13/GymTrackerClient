import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { ExerciseListEditableComponent } from './components/exercise-list-editable/exercise-list-editable.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrainingListEditableComponent } from './components/training-list-editable/training-list-editable.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { UserdataComponent } from './components/userdata/userdata.component';


const routes: Routes = [
  {path: '', component : MenuComponent },
  {path: 'menu', component : MenuComponent },
  {path: 'exercises', component : ExerciseListComponent },
  {path: 'trainings', component : TrainingListComponent },
  {path: 'exercises/exercisesedit', component : ExerciseListEditableComponent },
  {path: 'trainings/trainingsedit', component : TrainingListEditableComponent },
  {path: 'exercisesadd', component : AddExerciseComponent },
  {path: 'trainingsadd', component : AddTrainingComponent },
  {path: 'userdata', component : UserdataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
