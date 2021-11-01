import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

login(email: string, password: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(
      serverUrl + "signin",
      {
        email: email,
        password: password,
      },
      {  }
    );
  }
  register( username: string,email: string, password: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      //Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.post(
      serverUrl + "signup",
      {
        email: email,
        password: password,
        username: username,
        type:"part"
      },
      {  }
    );
  }

  registerPro( email: string, password: string,SIRET: string,
    companyName: string,
    companyCategory: string,
    companyAddress: string,
    companyZipCode: string,
    companyPhone: string,
    gender: string,
    firstName: string,
    lastName: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.post(
      serverUrl + "signup",
      {
        email: email,
        password: password,
        SIRET:SIRET,
        companyName: companyName,
        companyCategory:companyCategory,
        companyAddress:companyAddress,
        companyZipCode:companyZipCode,
        companyPhone:companyPhone,
        gender:gender,
        firstName:firstName,
        lastName:lastName,
        type:'pro'
      },
      {  }
    );
  }
}
