import { Component, OnInit } from '@angular/core';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  Cars:CarDetailDto[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsDetail();
  }

  getCarsDetail(){
    this.carService.getCarsDetail().subscribe((response) => {
      this.Cars = response.data;
    })
  }

}
