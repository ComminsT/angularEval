import {Component, Input, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../models/car";
import {CreateCar} from "../../models/create-car";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, shareReplay} from "rxjs";

@Component({
  selector: 'app-modify-car',
  templateUrl: './modify-car.component.html',
  styleUrls: ['./modify-car.component.css']
})
export class ModifyCarComponent implements OnInit {

  car?: Car
  createCarForm: FormGroup = this.fb.group({});
  submited: boolean = false;


  constructor(private carService: CarService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCar(id);
    console.log("car title : "+this.car?.title.length)


  }

  getCar(id: string | null): void {
    this.carService.fetchOne(id)
      .subscribe(
        data => {
          this.car = data;
          console.log(data);
          console.log(this.car)
          console.log(this.car.title)
          this.createCarForm = this.fb.group({
            title: [this.car.title, [Validators.required]],
            address: [this.car.address, [Validators.required]],
            brand: [this.car.brand, [Validators.required]],
            model: [this.car.model, [Validators.required]],
            model_year: [this.car.model_year, [Validators.required]],
            issuance: [this.car.issuance, [Validators.required]],
            mileage: [this.car.mileage, [Validators.required]],
            fuel: [this.car.fuel, [Validators.required]],
            color: [this.car.color, [Validators.required]],
            numbers_doors: [this.car.numbers_doors, [Validators.required]],
            horse_power: [this.car.horse_power, [Validators.required]],
            price: [this.car.price, [Validators.required]],
            pictures: [this.car.pictures],
            sold: [this.car.sold]
          })
        },
        error => {
          console.log(error);
        });
  }

  onSubmit() {
    this.submited = true;
    if (this.createCarForm.invalid) {
      return;
    }
    let car: Car = {
      id:this.car?.id,
      title: this.createCarForm.value.title,
      address: this.createCarForm.value.address,
      brand: this.createCarForm.value.brand,
      model: this.createCarForm.value.model,
      model_year: this.createCarForm.value.model_year,
      issuance: this.createCarForm.value.issuance,
      mileage: this.createCarForm.value.mileage,
      fuel: this.createCarForm.value.fuel,
      color: this.createCarForm.value.color,
      numbers_doors: this.createCarForm.value.numbers_doors,
      horse_power: this.createCarForm.value.horse_power,
      price: this.createCarForm.value.price,
      pictures: this.createCarForm.value.pictures,
      sold:(this.createCarForm.value.sold==null)?false:true
    }

    this.carService.update(car)
      .subscribe({
        next: ok => {
        }
      })
    this.router.navigateByUrl('');

  }


}
