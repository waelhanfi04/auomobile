import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }
  getAllUsers(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "allUsers",{ headers:header }
    );
  }
  userDetails(){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "getUserDetails",{ headers:header }
    );
  }
  updateProfile(body:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "updateInfo",body,{ headers:header}
    );
  }
  updatePassword(oldPassword:any,password:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.post(
      serverUrl + "updatePassword",{
        oldPassword:oldPassword,
        NewPassword:password
      },{ headers:header}
    );
  }
  blockUser(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "blockUser/"+id,{ headers:header}
    );
  }

}
