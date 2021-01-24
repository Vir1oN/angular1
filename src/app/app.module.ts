import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CitiesComponent} from './cities/cities.component';
import {CityComponent} from './city/city.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FullCityComponent } from './full-city/full-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent,
    HomeComponent,
    FullCityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {
      path: 'link/home', component: HomeComponent
    },
    {
      path: 'link/cities', component: CitiesComponent, children: [
        {path: ':pop', component: FullCityComponent}
      ]
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
