import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousingService} from '../housing.service';
import {Housinglocation} from '../interfaces/housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService = inject(HousingService)
  housingLocation: Housinglocation|undefined
  housingLocationId=-1

  constructor() {
    this.housingLocationId= Number(this.route.snapshot.paramMap.get('id'))
    this.housingLocation=this.housingService.getHousingLocation(this.housingLocationId)

  }

}
