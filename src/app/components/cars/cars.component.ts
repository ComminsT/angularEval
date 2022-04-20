import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from "../../models/car";
import {CarService} from "../../services/car.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars : Car[]=[];
  selectedCar! : Car
  sortValue: string = 'ASC';
  searchedWord = new FormControl('');

  filterCars = new FormGroup({
    searchedWord: this.searchedWord,
  })


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

  sortPrice() {
    this.sortValue=(this.sortValue==='ASC'?'DESC':'ASC');
  }

  search(form:any) {

    this.carService.searchByTitle(form['searchedWord'].value).subscribe({
      next: data=>{this.cars=data;},
      error:err =>{console.log(err)},
      complete: () => {
        console.log('search completed');
      }
    })
  }

  resetFilter() {
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

  onDetails(car: Car) {
    this.selectedCar=car;
  }
}
