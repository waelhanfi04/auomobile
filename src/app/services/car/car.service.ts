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
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "voiture",body,{ headers:header }
    );
  }
  addConcessionnaire(body:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "concessionnaire",body,{ headers:header }
    );
  }

  getConcessionnaire(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "concessionnaire",{ headers:header }
    );
  }
  updateCar(body:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "updateVoiture/",body,{ headers:header}
    );
  }
  deleteCar(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.delete(
      serverUrl + "voiture/"+id,{ headers:header }
    );
  }
  getAllCars(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "voiture",{ headers:header }
    );
  }
  getOneCar(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "voiture/"+id,{ headers:header }
    );
  }

 validateCar(id:any,status:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "carStatus",{
        id:id,
        status:status
      },{ headers:header }
    );
  }

  getUserCars(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getUserCars",{ headers:header }
    );
  }
  // allTypeCar(){
  //   const header = new HttpHeaders({
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
  //   });
  //   return this.http.get(
  //     serverUrl + "getUserCars",{ headers:header }
  //   );

  // }
  getCategory(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "allTypeCar",{ headers:header }
    );
  }
  getMarque(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getMarque/"+id,{ headers:header }
    );
  }
  getModel(idMarque:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getModel/"+idMarque,{ headers:header }
    );
  }
  getGeneration(idModel:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getGeneration/"+idModel,{ headers:header }
    );
  }
  getSerie(idGeneration:any,type:string){

    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    if(type==='moto'){
      return this.http.get(
        serverUrl + "getSerie/"+idGeneration+"?type="+type,{ headers:header }
      );
    }else{
      return this.http.get(
        serverUrl + "getSerie/"+idGeneration,{ headers:header }
      );
    }
 
  }
  getTrim(idSerie:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getTrim/"+idSerie,{ headers:header }
    );
  }
  getSpecification(idTrim:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getSpecification/"+idTrim,{ headers:header }
    );
  }
  /*
  /allTypeCar
/getMarque/:id_car_type 1
/getModel/:id_car_make
/getGeneration/:id_car_model
/getSerie/:id_car_generation
/getTrim/:id_car_serie
/getEquipement/:id_car_trim
/getSpecification/:id_car_trim/allTypeCar
  */
}
