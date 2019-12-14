import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-contact-main',
  templateUrl: './contact-main.component.html',
  styleUrls: ['./contact-main.component.scss']
})
export class ContactMainComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.buildContactForm();
  }

  // contact form init
  buildContactForm() {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      message: ['', Validators.required]
    });
  }

  // send contact information of the user to email

  onSubmitContactInfo() {
    this.submitted = true;

    const userInformation: User =
      User.formToObject(this.contactForm);
    //this.userService.sendUserInformation(userInformation).subscribe(data => {
    //   
    // }, error => console.log(error));
  }

}
