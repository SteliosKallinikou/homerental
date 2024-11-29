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
  filteredLocationList: Housinglocation[]=[]
  housingService:HousingService = inject(HousingService)

  constructor() {
   this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[])=>{
     this.housingLocationList= housingLocationList
     this.filteredLocationList= housingLocationList
   })
    this.filteredLocationList= this.housingLocationList
  }
  filterResults(text: string) {
    if(!text){
      this.filteredLocationList= this.housingLocationList
      return;
    }
    this.filteredLocationList=this.filteredLocationList.filter((housingLocation)=>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()))
  }
}
