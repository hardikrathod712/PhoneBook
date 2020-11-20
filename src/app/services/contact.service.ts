import { Injectable } from "@angular/core";
import { Contact } from '../model/contact.model';

@Injectable({
    providedIn: 'root',
})

export class ContactDataService {
    
    private contacts: Contact[];
    private key:string = "contacts";

    constructor(){
        if(localStorage.getItem(this.key)!=null)
            this.contacts = JSON.parse(localStorage.getItem(this.key));
        else
            this.contacts = [];
    }

    getContacts() {
        return this.contacts;
    }

    addContact(contact:Contact){
        this.contacts.push(contact);
        this.setStorage();
    }

    removeContact(contact: string){
        this.contacts = this.contacts.filter(cont => cont.contact != contact);
        this.setStorage();
    }

    private setStorage(){
        localStorage.setItem(this.key,JSON.stringify(this.contacts));
    }
}