import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormatUsersPipe } from './pipes/format-users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormatUsersPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
