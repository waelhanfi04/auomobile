import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
blogList:any
   constructor(private BlogService:BlogService) { 
   
   }
 
   ngOnInit(): void {
     this.getBlogList()
   }
 getBlogList(){
 this.BlogService.getListBlog().subscribe((response:any)=>{
   console.log('resssponse form listing blog-->',response)
   this.blogList=response.blog
 })
 }
}
