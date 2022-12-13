import { Component } from '@angular/core';
import { UserData } from 'src/app/models/UserData';
import { UserdataService } from 'src/app/servieces/userdata.service';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  userdata:UserData[]=[];
  constructor(private userdataservice:UserdataService){
    this.userdataservice.getUserData().subscribe((result: UserData[])=>(this.userdata=result));
}
}