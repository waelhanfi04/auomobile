import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../../../services/blog/blog.service'

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
blogList:any;
successMsg:string =''
   constructor(private BlogService:BlogService,private router:Router) { 
   
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
 deleteBlog(id:any){
  this.BlogService.deleteBlog(id).subscribe((response:any)=>{
    console.log('resssponse form listing blog-->',response)
    // this.blogList=response.blog
    this.successMsg='Blog a été supprimé avec succès!';
    // setTimeout(() => {
    //   this.router.navigate(['/blogs'])
    // }, 1000);
  })
 }
}
