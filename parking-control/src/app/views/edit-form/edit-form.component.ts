import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingSpotControlService } from 'src/app/shared/service/parking-spot-control.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  form: FormGroup | any;
  parkingSpot: any;

  constructor(
    private parkingSpotControlService: ParkingSpotControlService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getParkingSpot();
  }

  getParkingSpot() {

    this.parkingSpotControlService.getParkingSpotById().subscribe((data: { content: any; }) => {
      this.parkingSpot = data.content;
      console.log(data);
  });
  }
}
