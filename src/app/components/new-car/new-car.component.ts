import { Component, OnInit } from '@angular/core';
import {Car} from "../../models/car";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car.service";
import {CreateCar} from "../../models/create-car";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  submited: boolean=false;

  car?:Car

  createCarForm: FormGroup = this.fb.group({
    title: [this.car?.title,[Validators.required]],
    address:[this.car?.address,[Validators.required]],
    brand:[this.car?.brand,[Validators.required]],
    model:[this.car?.model,[Validators.required]],
    model_year:[this.car?.model_year,[Validators.required]],
    issuance:[this.car?.issuance,[Validators.required]],
    mileage:[this.car?.mileage,[Validators.required]],
    fuel:[this.car?.fuel,[Validators.required]],
    color:[this.car?.color,[Validators.required]],
    numbers_doors:[this.car?.numbers_doors,[Validators.required]],
    horse_power:[this.car?.horse_power,[Validators.required]],
    price:[this.car?.price,[Validators.required]],
    pictures:[this.car?.pictures],
    sold:[this.car?.sold]
  })
  constructor(private carService : CarService,
              private fb: FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("submit entered")
    this.submited = true;
    if(this.createCarForm.invalid){
      return ;
    }

    let car: CreateCar = {
      title: this.createCarForm.value.title,
      address:this.createCarForm.value.address,
      brand:this.createCarForm.value.brand,
      model:this.createCarForm.value.model,
      model_year:this.createCarForm.value.model_year,
      issuance:this.createCarForm.value.issuance,
      mileage:this.createCarForm.value.mileage,
      fuel:this.createCarForm.value.fuel,
      color:this.createCarForm.value.color,
      numbers_doors:this.createCarForm.value.numbers_doors,
      horse_power:this.createCarForm.value.horse_power,
      price:this.createCarForm.value.price,
      pictures:this.createCarForm.value.pictures,
      sold:(this.createCarForm.value.sold==null)?false:true
    }
    this.carService.create(car).subscribe({next:ok=>{}});
    this.router.navigateByUrl('');
  }

}
