import {inject, Injectable} from '@angular/core';
import {Housinglocation} from './interfaces/housinglocation';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations';
  http = inject(HttpClient)

   getAllHousingLocations(): Observable<Housinglocation[]>{
    return this.http.get<Housinglocation[]>(this.url)
  }

  getHousingLocation(id:number):Observable<Housinglocation> {
   return this.http.get<Housinglocation>(`${this.url}/${id}`)
  }

  submitApplication(firstName: string, lastName: string, email: string ){
    console.log(`Home Application reacived: First name: ${firstName}, lastName: ${lastName}, Email: ${email}`)
  }

}
