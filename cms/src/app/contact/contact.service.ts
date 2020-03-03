import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
// contactIsSelectedEvent = new EventEmitter<Contact[]>();
contactIsSelectedEvent = new Subject<Contact[]>();
contacts: Contact[] = [];

constructor() {
  this.contacts = MOCKCONTACTS;
 }

 deleteContact(contact: Contact) {
  if (contact === null) {
    return;
  }

  const pos = this.contacts.indexOf(contact);
  if (pos < 0) {
    return;
  }

  this.contacts.splice(pos, 1);
  // const contactsListClone = this.contact.slice();

  this.contactIsSelectedEvent.emit(this.contacts.slice());
 }

 

getContact(id: string): Contact {
  for (const contact of  this.contacts) {
    if (contact.id === id) {
    return contact;
    }
}

  return null;
}

getContacts(): Contact[] {
  return this.contacts.slice();
}

/* updare contact(originalContact: Contact. nerContactL contact) {
  if (!originalContact ) and lots of other code!!!
}*/
}

