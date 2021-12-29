import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PubliciteService {

  constructor(private http: HttpClient) { }
  getOnePublicite(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.get(
      serverUrl + "publicite/"+id,{ headers:header }
    );
  }
  deletePublicite(id:any){
    const header = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    });
    return this.http.delete(
      serverUrl + "publicite/"+id,{ headers:header}
    );
  }
  /*
   app.get("/publicite", controller.allPublicite);
   app.get("/publicite/:id", controller.getOnePublicite);


  app.post(
    "/publicite",controller.addPublicite
  );

  app.delete(
    "/publicite/:id",controller.deletePublicite
  );

  app.post(
    "/validatePublicite",controller.validatePublicite
  );

  app.post(
    "/rejectPublicite",controller.rejectPublicite
  );

  app.get("/validatedPublicite", controller.allValidatedPublicite);
  
  */
}
