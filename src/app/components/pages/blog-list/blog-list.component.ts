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
userRole:any;

   constructor(private BlogService:BlogService,private router:Router) { 
   
   }
 
   ngOnInit(): void {
    this.userRole= localStorage.getItem('role');

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

    if(response.message === 'blog was deleted successfully!')
  {  this.successMsg='Blog a été supprimé avec succès!';
    setTimeout(() => {
    this.ngOnInit()
    this.successMsg=""
    }, 1000);}
  })
 }
 onImgError(event: any) {
  event.target.src = '../../../../assets/images/concrete-wall-3.png';
  
}
}
