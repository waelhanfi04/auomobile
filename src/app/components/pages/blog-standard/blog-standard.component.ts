import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-standard',
  templateUrl: './blog-standard.component.html',
  styleUrls: ['./blog-standard.component.css']
})
export class BlogStandardComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
  }
  // get sanitizedDescription() {
  //   return this.sanitizer.bypassSecurityTrustHtml(this.campaign.description);
  // }
}
