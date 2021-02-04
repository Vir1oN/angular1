import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatUsersPipe } from './pipes/format-users.pipe';
import {HttpClientModule} from '@angular/common/http';
import { BoldWithBgDirective } from './directives/bold-with-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormatUsersPipe,
    BoldWithBgDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
