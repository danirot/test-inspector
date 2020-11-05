import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InspectorModule } from '@ngneat/inspector';
import { environment } from '../environments/environment';
import {DropdownListModule} from './components/dropdown-list/dropdown-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    environment.production ? [] : InspectorModule.forRoot(),
    DropdownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
