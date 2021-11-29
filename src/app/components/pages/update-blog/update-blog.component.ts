import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Editor } from 'ngx-editor';
import { DomSanitizer } from '@angular/platform-browser';
import { BlogService } from '../../../services/blog/blog.service'
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  updateBlogForm: FormGroup
 // editor = new Editor();
 blogDetails:any
  constructor(private BlogService:BlogService,private sanitizer: DomSanitizer,private route: ActivatedRoute) { 
    this.updateBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    })
  }
  ngOnInit(): void {
    this.route.params
    .pipe(
      map((params: any) => {
        console.log(params['id']);
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

updateBlog(){
this.BlogService.updateBlog(this.blogDetails.id,this.updateBlogForm.controls.title?.value,this.updateBlogForm.controls.description?.value)
.subscribe((response:any)=>{
  console.log('resssponse form add blog-->',response)
  if(response.message=== "Blog was added successfully!"){
    console.log('suuuuc')
  }

})
}

}
