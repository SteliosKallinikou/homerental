import {Component, Input} from '@angular/core';
import {Housinglocation} from '../interfaces/housinglocation';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss'
})
export class HousingLocationComponent {
@Input() housingLocation!: Housinglocation;
}
