import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeFR from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { ModifyCarComponent } from './components/modify-car/modify-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsComponent } from './components/cars/cars.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './pipess/filter.pipe';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    NewCarComponent,
    ModifyCarComponent,
    CarDetailsComponent,
    CarsComponent,
    NavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
