import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParkingSpot } from '../model/parkingSpot';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotControlService {

  urlApi = "http://localhost:8080/parking-spot";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllParkingSpot(): Observable<ResponsePageable> | any{
    return this.httpClient.get<ResponsePageable>(this.urlApi);
  }

  public getParkingSpotById(id: number): Observable<ParkingSpot> | any {
    return this.httpClient.get<ParkingSpot>(`${this.urlApi}/${id}`);
  }

  public sendParkingSpot(parkingSpot: any): Observable<ParkingSpot> {
    return this.httpClient.post<any>(this.urlApi, parkingSpot, this.httpOptions)
  }
}
