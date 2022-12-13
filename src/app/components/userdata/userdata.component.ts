import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/models/UserData';
import { UserdataService } from 'src/app/servieces/userdata.service';
import {Chart} from 'chart.js/auto'


@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  @Input() userdataa ?:UserData;
  @Output() userdataaAdded=new EventEmitter<UserData[]>();
 
  content=false;
  public chart: any;
  userdata:UserData[]=[];
  dateee :Date []=[]; 
  convertdate :string []=[]; 
  weight :number[]=[];
  showchart=false;
  userdataToEdit?:UserData;

showYourChart(){

  this.showchart = !this.showchart;
  
  this.createChart();
}


  ngOnInit(): void {
  
    console.log(this.dateee)
    console.log(this.weight)
   
   

  }
  ngAfterViewChecked():void{
   
    this.filldates();
  
  }


  constructor(private userdataservice:UserdataService){
    
    this.userdataservice.getUserData().subscribe((result: UserData[])=>(this.userdata=result)) 
    
  

  }
  deleteUserdata(userdata:UserData){
    this.userdataservice.deleteUserData(userdata).subscribe((userdatas:UserData[])=>this.userdataaAdded.emit(userdatas))
    }
 
  createChart(){
  
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.convertdate , 
	      
        
        datasets: [      
          {
            label: "waga",
            data: this.weight,
            backgroundColor: 'blue'
          }  
        ]
      },
      options: {
        aspectRatio:2.5,
       
      }
      
     
    
    });
 
    
  }
  filldates(){
   if(this.dateee.length==0){
   
    this.userdata.forEach( (item) => {  
      
     
      this.dateee.push(item.date);
      
  
    });  
    this.dateee.forEach( (item) => {  
      
     
      this.convertdate.push(new Date(item).toLocaleDateString());
      
  
    });  
  }
  if(this.weight.length==0){
   
    this.userdata.forEach( (item) => {  
      
      this.weight.push(item.weight);
      
  
    });  
  }
}

}
