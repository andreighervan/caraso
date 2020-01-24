import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-step2',
  templateUrl: './registration-step2.component.html',
  styleUrls: ['./registration-step2.component.scss']
})
export class RegistrationStep2Component implements OnInit {

  @Output() formValue = new EventEmitter();

  constructor() { }

  @Input() regForm: FormGroup;

  ngOnInit() {
  }

  submit() {
    this.formValue.emit(this.regForm.value);
  }

}