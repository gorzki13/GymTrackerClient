import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../models/Exercise';
import { Training } from '../models/Training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

 
  constructor(private http: HttpClient) { }

public getTrainings(): Observable<Training[]>{
  
  return this.http.get<Training[]>("https://localhost:7271/api/Training");
}



public addTraining(training:Training): Observable<Training[]>{
  
  return this.http.post<Training[]>("https://localhost:7271/api/Training",training);
}


public deleteTrainings(training:Training): Observable<Training[]>{
  
  return this.http.delete<Training[]>("https://localhost:7271/api/Training/"+training.id);
}

}
