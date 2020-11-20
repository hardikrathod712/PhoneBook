import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact.model';
import { ContactDataService } from '../services/contact.service';

@Component({
  selector: 'app-show-contacts',
  templateUrl: './show-contacts.component.html',
  styleUrls: ['./show-contacts.component.css']
})
export class ShowContactsComponent implements OnInit {

  searchText: string;
  public contacts: Contact[];

  constructor(public contactService: ContactDataService) {
    this.contacts = this.contactService.getContacts();
  }

  ngOnInit(): void {
  }

  removeContact(contact:Contact){
    this.contactService.removeContact(contact.contact);
    this.contacts = this.contactService.getContacts();
  }  
}
