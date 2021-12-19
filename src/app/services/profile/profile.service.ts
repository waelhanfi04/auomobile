import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  userDetails(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "user",{ headers:header }
    );
  }
  updateProfile(body:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "updateProfile",body,{ headers:header}
    );
  }
  updatePassword(oldPassword:any,newPassword:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "updatePassword",{
        oldPassword:oldPassword,
        newPassword:newPassword
      },{ headers:header}
    );
  }
}
