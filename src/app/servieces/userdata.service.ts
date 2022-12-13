import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../models/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private url="https://localhost:7271/api/UserData"
  constructor(private http: HttpClient) { }

public getUserData(): Observable<UserData[]>{
  
  return this.http.get<UserData[]>("https://localhost:7271/api/UserData");
}

public addUserData(userdata:UserData): Observable<UserData[]>{
  
  return this.http.post<UserData[]>("https://localhost:7271/api/UserData",userdata);
}


public deleteUserData(userdata:UserData): Observable<UserData[]>{
  
  return this.http.delete<UserData[]>("https://localhost:7271/api/UserData/"+userdata.id);
}

}
