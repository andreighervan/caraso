import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToSellACar() {
    this.router.navigateByUrl('/sell-a-car');
    document.body.scrollTop = document.documentElement.scrollTop = 400;
  }

}
