import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-component-contact',
  templateUrl: './ui-component-contact.component.html',
  styleUrls: ['./ui-component-contact.component.scss']
})
export class UiComponentContactComponent implements OnInit {
  contactForm: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      message: [null, Validators.required],
      subject: [null, Validators.required]
    })
  }

}
