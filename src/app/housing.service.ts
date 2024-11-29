import { Injectable } from '@angular/core';
import {Housinglocation} from './interfaces/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor() { }
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<Housinglocation[]>{
    const data = await  fetch(this.url)
    return (await data.json())?? []
  }

  async getHousingLocation(id:number):Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`)
    return (await  data.json()) ?? {}

  }

  submitApplication(firstName: string, lastName: string, email: string ){
    console.log(`Home Application reacived: First name: ${firstName}, lastName: ${lastName}, Email: ${email}`)
  }

}
