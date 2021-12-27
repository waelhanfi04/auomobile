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
 blogPic:any
  constructor(private BlogService:BlogService, private router:Router) { 
    this.addBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      photo: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }
addBlog(){
this.BlogService.addBlog(this.addBlogForm.controls.title?.value,this.addBlogForm.controls.description?.value,this.blogPic)
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
delete(){
  this.addBlogForm.get('photo')?.setValue('')   
  this.blogPic=this.addBlogForm.get('photo')?.value
}
onFileChange(e: any) {
   
  if (
    e.target.files[0].type == "image/png" ||
    e.target.files[0].type == "image/jpeg" ||
    e.target.files[0].type == "image/jpg" 
  ) {

    var file = e.target.files[0];
    var r = new FileReader();
    if (e.target.files[0]) {
      r.readAsDataURL(file);
      r.onload = () => {
        let selectedFile = r.result;
        let selectedFilename = file.name;
       // const FileKit = this.base64ToFile(selectedFile, selectedFilename);
       const fileKit=r.result
       this.addBlogForm.get('photo')?.setValue(fileKit)   
       this.blogPic=this.addBlogForm.get('photo')?.value
    }
  }
}
}
base64ToFile(data: any, filename: any) {
const arr = data.split(",");
const mime = arr[0].match(/:(.*?);/)[1];
const bstr = atob(arr[1]);
let n = bstr.length;
let u8arr = new Uint8Array(n);

while (n--) {
  u8arr[n] = bstr.charCodeAt(n);
}

return new File([u8arr], filename, { type: mime });
}
}
