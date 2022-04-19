export interface CreateCar {
  title: string;
  address: string;
  brand: string;
  model: string
  model_year: Date;
  issuance: Date;
  mileage: string;
  fuel: string;
  color: string;
  numbers_doors : number;
  horse_power : number;
  price : number;
  pictures : string[];
  sold : boolean
}
