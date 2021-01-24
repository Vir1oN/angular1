import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {log} from 'util';

@Component({
  selector: 'app-full-city',
  templateUrl: './full-city.component.html',
  styleUrls: ['./full-city.component.css']
})
export class FullCityComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
