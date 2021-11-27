import { Injectable } from '@angular/core';
import { serverUrl } from '../../shared/config'
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http: HttpClient) { }

  getListBlog() {
      return this.http.get(serverUrl + "blog", {  });
    }
      getOneBlog(id:any) {
      return this.http.get(serverUrl + "blog/"+id, {  });
    }
      addBlog(title: string, description: string) {
      return this.http.post(serverUrl + "blog",{
        title: title,
         description:description
      }, {  });
    }
         deleteBlog(id:any) {
      return this.http.delete(serverUrl + "blog/"+id, {  });
    }
// app.get("/blog", controller.allBlog);

//   app.get("/blog/:id", controller.getOneBlog);

//  app.post(
//    "/blog",controller.addBlog
//  );

//  app.delete(
//    "/blog/:id",controller.deleteBlog
//  );

//  app.post(
//    "/validateBlog",controller.validateBlog
//  );

//  app.post(
//    "/rejectBlog",controller.rejectBlog
//  );
}
