import { Component, OnInit } from '@angular/core';
import {Car} from "../../models/car";
import {CarService} from "../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars : Car[]=[];


  constructor(private carService: CarService,
              private router:Router,
              ) {}

  ngOnInit(): void {
    this.carService.fetchAll()
      .subscribe({
        next: cars => {
          this.cars = cars;
        },
        error: err => {
          console.log(err);
        },
        complete: () => {
          console.log('completed');
        }
      });
  }
  onDeleteCar(id:number):void {
    this.carService.deleteOne(id).subscribe({
      next:ok=>{}
    });
    location.reload()
  }

  carModif(car : Car) {
    this.router.navigate(['carModif/'+car.id]);

  }
}
