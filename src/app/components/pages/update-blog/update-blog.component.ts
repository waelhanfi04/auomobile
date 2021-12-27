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
 successMsg:string =''
 blogPic:any
  constructor(private BlogService:BlogService,private router: Router,private sanitizer: DomSanitizer,private route: ActivatedRoute) { 
    this.updateBlogForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      photo: new FormControl("", [Validators.required]),
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
  this.blogDetails=response.blog;
  this.blogPic=this.blogDetails.photo
})
}

updateBlog(){
this.BlogService.updateBlog(this.blogDetails.id,this.updateBlogForm.controls.title?.value,this.updateBlogForm.controls.description?.value,this.blogPic)
.subscribe((response:any)=>{
  console.log('resssponse form add blog-->',response)
  if(response.message=== "blog was updated successfully!"){
    this.successMsg="Blog a été modifié avec succès!"
    setTimeout(() => {
      this.router.navigate(['/blog',this.blogDetails.id])
    }, 1000);
  }
  //this.successMsg='Blog a été supprimé avec succès!';
  // setTimeout(() => {
  //   this.router.navigate(['/blogs'])
  // }, 1000);

})
}
delete(){
  this.updateBlogForm.get('photo')?.setValue('')   
  this.blogPic=this.updateBlogForm.get('photo')?.value
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
       this.updateBlogForm.get('photo')?.setValue(fileKit)   
       this.blogPic=this.updateBlogForm.get('photo')?.value
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
