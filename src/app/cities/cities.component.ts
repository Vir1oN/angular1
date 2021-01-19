import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
cities: any[] = [
    {
        name: 'Boston',
        population: 847847,
        country: 'USA',
        region: 'NA'
    },
    {
        name: 'Signapore',
        population: 49458,
        country: 'Signapore',
        region: 'Asia'
    },
    {
        name: 'Tel-Aviv',
        population: 6678447,
        country: 'Israel',
        region: 'Mediterranean'
    },
    {
        name: 'Hannover',
        population: 535061 ,
        country: 'Germany',
        region: 'Lower Saxony'
    },
    {
        name: 'Lviv',
        population: 4000000,
        country: 'Ukraine',
        region: 'Eastern Europe'
    },
];

  constructor() { }

  ngOnInit(): void {
  }

}
