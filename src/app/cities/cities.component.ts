import { Component, OnInit } from '@angular/core';
import {cities} from '../data/data';
import {City} from '../models/City';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[] = cities;

  constructor() { }

  ngOnInit(): void {
  }

}
