import { Component } from '@angular/core';

@Component({
  selector: 'app-caloriecalculator',
  templateUrl: './caloriecalculator.component.html',
  styleUrls: ['./caloriecalculator.component.css']
})
export class CaloriecalculatorComponent {

  goals=["lose weight","maintain weight","gain weight"]
  actvitys=["Inactive","Somewhat active","Active","Veryactive","Hugeactive"] 
  weight=0;
  activity="";
  activite=0;
  goal="";
 calories=0;
 text="";




   calculate(){
 
      
      if(this.activity ==="Inactive"){
       this.activite=1.2;
      }else if(this.activity ==="Somewhat active" ){
        this.activite=1.4;
      }else if(this.activity === "Active"){
        this.activite=1.6;
      }else if(this.activity === "Veryactive"){
        this.activite=1.8;
      }else if(this.activity ==="Hugeactive" ){
        this.activite=2;
      }
      this.calories = this.weight*24*this.activite;
      
      if(this.goal==="lose weight"){
        this.calories= this.calories-500;
      }else if(this.goal==="gain weight"){
       this.calories=this.calories+300;
      }

         
     
      console.log(this.activite);
      
    console.log(this.calories);
   this.text ="Your estimated daily calorie needs  are:  "+ String(Math.round(this.calories))+"kcal";
    return this.calories;
  }






}
