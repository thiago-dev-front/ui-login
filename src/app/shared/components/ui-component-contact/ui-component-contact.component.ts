// import { swal } from '@sweetalert';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ui-component-contact',
  templateUrl: './ui-component-contact.component.html',
  styleUrls: ['./ui-component-contact.component.scss']
})
export class UiComponentContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmit = true;
  submitMessage='';
  iconContact = '../../../../assets/svg/contact.svg'
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

  async submitData(value) {
    this.myForm.add(value).then(response => {
      response
    })
    .catch(err => {
      console.log(err)
    })
    this.isSubmit = true;

    setTimeout(() => {
      this.isSubmit = false;
      const Toast =  Swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: '#fff',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true
      })
       Toast.fire({
        icon: 'success',
        title: 'Mensagem enviada com sucesso'
      })
    }, 500);



  }



}
