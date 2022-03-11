import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-ui-component-contact',
  templateUrl: './ui-component-contact.component.html',
  styleUrls: ['./ui-component-contact.component.scss']
})
export class UiComponentContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmit = true;
  submitMessage='';
  private myForm: AngularFirestoreCollection<any>
  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this.firestore.collection('enquiry');
    this.contactForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      message: [null, [Validators.required]],
      subject: [null, [Validators.required]]
    })
  }

  submitData(value) {
    // console.log(value);
    this.myForm.add(value).then(response => {
      this.submitMessage = 'Submitted Sucessfuly';
    })
    .catch(err => {
      console.log(err)
    })
    this.isSubmit = true;

    setTimeout(() => {
      this.isSubmit = false;
    }, 4000)
  }

}
