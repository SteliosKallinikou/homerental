import {Component, inject} from '@angular/core';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import {Housinglocation} from '../interfaces/housinglocation';
import {CommonModule} from '@angular/common';
import {HousingService} from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [
    HousingLocationComponent,CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList: Housinglocation[]=[]
  housingService:HousingService = inject(HousingService)

  constructor() {
    this.housingLocationList=this.housingService.getAllHousingLocations()
  }


}
