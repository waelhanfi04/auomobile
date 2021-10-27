import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  /*login(email: string, password: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.post(
      serverUrl + "/login",
      {
        email: email,
        password: password,
      },
      { headers }
    );
  }
  register(email: string, password: string, confirmPassword: string) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    });
    return this.http.post(
      serverUrl + "/signup" + localStorage.getItem("local"),
      {
        email: email,
        password: password,
        confirmPassword: confirmPassword
      },
      { headers }
    );
  }*/
}
