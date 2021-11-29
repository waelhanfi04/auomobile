import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }
  addCar(body:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.post(
      serverUrl + "voiture",body,{ headers:header }
    );
  }
  updateCar(body:any){
    // const header = new HttpHeaders({
    //   "Content-Type": "application/json",
    //   Authorization: "Bearer " + localStorage.getItem("access_token"),
    // });
    return this.http.put(
      serverUrl + "updateVoiture/",body,{ }
    );
  }
  deleteCar(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.delete(
      serverUrl + "voiture/"+id,{ headers:header }
    );
  }
  getAllCars(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.get(
      serverUrl + "voiture",{ headers:header }
    );
  }
  getOneCar(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.get(
      serverUrl + "voiture/"+id,{ headers:header }
    );
  }

}
