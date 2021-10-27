import { HttpClient, HttpHeaders } from "@angular/common/http";
const serverUrl = "";
const headers = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  });
export {serverUrl,headers}