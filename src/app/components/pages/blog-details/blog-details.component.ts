import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogService } from '../../../services/blog/blog.service'
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blogDetails:any;
  pageId:any;
  url:any;
  catId:any;
  constructor(private BlogService:BlogService,private sanitizer: DomSanitizer,private route: ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params: any) => {
        console.log(params['id']);
        this.pageId=params['id'];
        this.url=this.pageId;
        this.catId=params['id'];


        
        return params['id'];
      })
    )
    .subscribe((params) => this.getDetailsBlog(params));
   
  }
getDetailsBlog(id:any){
this.BlogService.getOneBlog(id).subscribe((response:any)=>{
  console.log('resssponse form one blog-->',response)
  this.blogDetails=response.blog
})
}
}
