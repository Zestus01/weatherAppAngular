import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip={ZIP},us&appid=0df3bd48560ad03c51a4637c5db0548e';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getData(zip: string): Observable<any>{
    return this.http.get(this.weatherURL.replace('{ZIP}', zip));
  }
}