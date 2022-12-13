import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { AddExerciseComponent } from './components/add-exercise/add-exercise.component';
import { FormsModule } from '@angular/forms';
import { ExerciseListEditableComponent } from './components/exercise-list-editable/exercise-list-editable.component';
import { TrainingListEditableComponent } from './components/training-list-editable/training-list-editable.component';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AddUserDataComponent } from './components/add-user-data/add-user-data.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { UserdataEditableComponent } from './components/userdata-editable/userdata-editable.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AdderComponent } from './components/adder/adder.component';
import { CaloriecalculatorComponent } from './components/caloriecalculator/caloriecalculator.component';
import { OnerepmaxcalculatorComponent } from './components/onerepmaxcalculator/onerepmaxcalculator.component';



@NgModule({
  declarations: [
   
    AppComponent,
    ExerciseListComponent,
    TrainingListComponent,
    AddExerciseComponent,
    ExerciseListEditableComponent,
    TrainingListEditableComponent,
    AddTrainingComponent,
    NavbarComponent,
    MenuComponent,
    AddUserDataComponent,
    UserdataComponent,
    UserdataEditableComponent,
    AdderComponent,
    CaloriecalculatorComponent,
    OnerepmaxcalculatorComponent
  ],
  imports: [
    NgSelectModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
