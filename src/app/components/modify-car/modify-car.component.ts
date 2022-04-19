import {Component, Input, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "../../models/car";
import {CreateCar} from "../../models/create-car";
import {ActivatedRoute} from "@angular/router";
import {Observable, shareReplay} from "rxjs";

@Component({
  selector: 'app-modify-car',
  templateUrl: './modify-car.component.html',
  styleUrls: ['./modify-car.component.css']
})
export class ModifyCarComponent implements OnInit {

 car?: Car
  createCarForm: FormGroup=this.fb.group({});
submited: boolean = false;


  constructor(private carService : CarService,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
   this.carService.fetchOne(id).subscribe({
     next: i=>{this.car=i},
     error: err=>{console.log(err)}
   })

    this.createCarForm = this.fb.group({
      title: [this.car?.title,[Validators.required]],
      address:['test',[Validators.required]],
      brand:['',[Validators.required]],
      model:['',[Validators.required]],
      model_year:['',[Validators.required]],
      issuance:['',[Validators.required]],
      mileage:['',[Validators.required]],
      fuel:['',[Validators.required]],
      color:['',[Validators.required]],
      number_doors:['',[Validators.required]],
      horse_power:['',[Validators.required]],
      price:['',[Validators.required]],
      pictures:[''],
      sold:['',[Validators.required]
      ]
    })
  }

  onSubmit(){
  this.submited=true;
  if(this.createCarForm.invalid){
    return;
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
    number_doors:this.createCarForm.value.number_doors,
    horse_power:this.createCarForm.value.horse_power,
    price:this.createCarForm.value.price,
    pictures:this.createCarForm.value.pictures,
    sold:this.createCarForm.value.sold
  }

  this.carService.create(car)
    .subscribe({
      next:ok=>{}
    })
  }

}
