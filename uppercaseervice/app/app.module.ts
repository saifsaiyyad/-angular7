import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { upperComponent } from './component/upper.component';
import { HttpClientModule } from '@angular/common/http';
import { upperServece } from './service/upper.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,upperComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [upperServece],
  bootstrap: [upperComponent]
})
export class AppModule { }
