import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
 successMsg:string=''
  constructor(private BlogService:BlogService, private router:Router) { 
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
    this.successMsg='Blog a été ajouté avec succès!';
        setTimeout(() => {
      this.router.navigate(['/blogs'])
    }, 1000);
  }

})
}
}
