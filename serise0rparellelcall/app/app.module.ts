import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { seriesComponent } from './components/series.component';
import { customersService } from './services/customers.service';
import { countriesService } from './services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { parallelComponent } from './components/parallel.component';
@NgModule({
  declarations: [
    AppComponent,seriesComponent,parallelComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [customersService,countriesService],
  bootstrap: [parallelComponent]
})
export class AppModule { }
