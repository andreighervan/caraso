import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.scss']
})
export class RegistrationStep2Component implements OnInit {

  constructor() { }

  @Input() regForm: FormGroup;

  formSubmitted: boolean;

  ngOnInit() {
  }

  submit() {
    console.log(this.regForm.value);
    this.formSubmitted = true;
  }

}