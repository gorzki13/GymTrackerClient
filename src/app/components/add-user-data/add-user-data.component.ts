import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from 'src/app/models/UserData';
import { UserdataService } from 'src/app/servieces/userdata.service';

@Component({
  selector: 'app-add-user-data',
  templateUrl: './add-user-data.component.html',
  styleUrls: ['./add-user-data.component.css']
})
export class AddUserDataComponent {
  @Input() userdata ?:UserData;
  @Output() userdataAdded=new EventEmitter<UserData[]>();
  
  constructor(private userdataservice: UserdataService){}

  ngOnInit():void
  {

  

  }
  
   createUserdata(userdata : UserData)
   {
   userdata.date= new Date();
    this.userdataservice.addUserData(userdata)
    .subscribe((userdatas:UserData[])=>this.userdataAdded.emit(userdatas));
   }
}
