import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { Editor } from 'ngx-editor';
import { BlogService } from '../../../services/blog/blog.service'
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  addBlogForm: FormGroup
 // editor = new Editor();
  constructor(private BlogService:BlogService) { 
    this.addBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
addBlog(){
this.BlogService.addBlog(this.addBlogForm.controls.title?.value,this.addBlogForm.controls.description?.value)
.subscribe((response:any)=>{
  console.log('resssponse form add blog-->',response)
  if(response.message=== "Blog was added successfully!"){
    console.log('suuuuc')
  }

})
}
}
