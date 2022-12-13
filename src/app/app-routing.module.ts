import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { AdderComponent } from './components/adder/adder.component';
import { CaloriecalculatorComponent } from './components/caloriecalculator/caloriecalculator.component';
import { ExerciseListEditableComponent } from './components/exercise-list-editable/exercise-list-editable.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { OnerepmaxcalculatorComponent } from './components/onerepmaxcalculator/onerepmaxcalculator.component';
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
  {path: 'exercises/exercisesedit/add', component : AdderComponent },
  {path: 'trainings/trainingsedit/add', component : AdderComponent },
  {path: 'exercisesadd', component : AddExerciseComponent },
  {path: 'trainingsadd', component : AddTrainingComponent },
  {path: 'userdata', component : UserdataComponent },
  {path: 'userdata/add', component : AdderComponent },
  {path: 'calculator', component : CaloriecalculatorComponent },
  {path: 'onerepmax', component : OnerepmaxcalculatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
