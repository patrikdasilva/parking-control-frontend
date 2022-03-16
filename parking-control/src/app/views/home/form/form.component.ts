import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingSpot } from 'src/app/shared/model/parkingSpot';
import { ParkingSpotControlService } from 'src/app/shared/service/parking-spot-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public form: FormGroup | any;
  
  constructor(
    private fb: FormBuilder,
    private rest: ParkingSpotControlService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      parkingSpotNumber:  ['', [Validators.required]],
      licensePlateCar:    ['', [Validators.required]],
      brandCar:           ['', [Validators.required]],
      modelCar:           ['', [Validators.required]],
      colorCar:           ['', [Validators.required]],
      responsibleName:    ['', [Validators.required]],
      apartment:          ['', [Validators.required]],
      block:              ['', [Validators.required]]
    });
  }

  saveParkingSpot() {
    this.rest.sendParkingSpot(this.form.value).subscribe(result => {});
  }
}
