import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeeServiceService} from './employee-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EmployeeServiceService], //Or you Inject it here, BASICALLY you have two choices :)
  bootstrap: [AppComponent]
})
export class AppModule { }
