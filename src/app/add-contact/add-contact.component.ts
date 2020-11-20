import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Contact } from '../model/contact.model';
import { ContactDataService } from '../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  contactControl: FormControl;

  constructor(formBuilder: FormBuilder, public contactService: ContactDataService) { 
    this.firstNameControl = new FormControl();
    this.lastNameControl = new FormControl();
    this.contactControl = new FormControl();

    this.contactForm = formBuilder.group({
      "first-name":this.firstNameControl,
      "last-name":this.lastNameControl,
      "contact":this.contactControl
    })
  }

  ngOnInit(): void {
  }

  addContact(){
    let firstName = this.firstNameControl.value;
    let lastName = this.lastNameControl.value;
    let contct = this.contactControl.value;

    let contact = new Contact(firstName,lastName,contct);

    this.contactService.addContact(contact);
    this.contactForm.reset();
  }
}
