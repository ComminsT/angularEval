import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {NewCarComponent} from "./components/new-car/new-car.component";
import {ModifyCarComponent} from "./components/modify-car/modify-car.component";

const routes: Routes = [
  {path:'',component: CarsComponent},
  {path:'carModif/:id',component: ModifyCarComponent},
  {path:'newCar',component: NewCarComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
