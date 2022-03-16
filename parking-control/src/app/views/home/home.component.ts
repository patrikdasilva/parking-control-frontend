import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParkingSpot } from 'src/app/shared/model/parkingSpot';
import { ParkingSpotControlService } from 'src/app/shared/service/parking-spot-control.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  parkingSpots: ParkingSpot[] | any;
  parkingSpotById: ParkingSpot | any;

  constructor(
    public parkingSpotControlService: ParkingSpotControlService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getParkingSpotControl();
  }

  getParkingSpotControl() {
    this.parkingSpotControlService.getAllParkingSpot().subscribe((data: { content: any; }) => {
        this.parkingSpots = data.content;
    });
  }
  
  editParkingSpot(parkingSpotId: number) {
    this.router.navigate(['editSpot/'], { queryParams: { parkingSpotId } });
    this.parkingSpotControlService.getParkingSpotById(parkingSpotId).subscribe((data: undefined) => {
      this.parkingSpotById = data;
    })
  }
}
