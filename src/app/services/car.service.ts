import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car} from "../models/car";
import {CreateCar} from "../models/create-car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    })
  };

  private BASE_URL = "http://localhost:8000";

  constructor(private http: HttpClient) {
  }

  fetchAll(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.BASE_URL}/cars`)
  }

  deleteOne(id:number): Observable<Car> {
    return this.http.delete<Car>(`${this.BASE_URL}/cars/${id}`)
  }

  create(car: CreateCar): Observable<Car[]> {
    return this.http.post<Car[]>(`${this.BASE_URL}/cars`, car, this.httpOptions)
  }
  update(car:Car):Observable<Car[]>{
    return this.http.put<Car[]>(`${this.BASE_URL}/cars/${car.id}`, car, this.httpOptions)

  }

  fetchOne(id: string | number | null) :Observable<Car> {
    console.log(`${this.BASE_URL}/cars/${id}`)
    return this.http.get <Car> (`${this.BASE_URL}/cars/${id}`)
  }

  searchByTitle(word: string) :Observable<Car[]>{
    console.log(word)
    return this.http.get<Car[]>(`${this.BASE_URL}/cars?title_like=${word}`);
  }
}
