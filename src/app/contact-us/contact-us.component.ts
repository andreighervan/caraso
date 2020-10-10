import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  title = 'CONTACT <span>US</span>';
  titleBreadcrumb: any;

  constructor(private sanitized: DomSanitizer) { }

  ngOnInit() {
    this.titleBreadcrumb = this.sanitized.bypassSecurityTrustHtml(this.title);
  }

}
