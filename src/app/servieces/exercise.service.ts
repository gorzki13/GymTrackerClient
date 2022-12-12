import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from '../models/Exercise';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private url="https://localhost:7271/api/Exercise"
  constructor(private http: HttpClient) { }

public getExercises(): Observable<Exercise[]>{
  
  return this.http.get<Exercise[]>("https://localhost:7271/api/Exercise");
}

public addExercise(exercise:Exercise): Observable<Exercise[]>{
  
  return this.http.post<Exercise[]>("https://localhost:7271/api/Exercise",exercise);
}


public deleteExercise(exercise:Exercise): Observable<Exercise[]>{
  
  return this.http.delete<Exercise[]>("https://localhost:7271/api/Exercise/"+exercise.id);
}




}
