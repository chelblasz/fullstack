import { Injectable, OnDestroy } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ContactService implements OnDestroy {
contactIsSelectedEvent = new Subject<Contact[]>();
contacts: Contact[] = [];
maxContactId: number;

constructor() {
  this.contacts = MOCKCONTACTS;
  this.maxContactId = this.getMaxId();
 }

 addContact(newContact: Contact) {
  if (newContact === null) {
    return;
  }
  this.maxContactId++;
  newContact.id = String(this.maxContactId);

  this.contacts.push(newContact);
  this.contactIsSelectedEvent.next(this.contacts.slice());
  }

  updateContact(originalDocument: Contact, newContact: Contact) {
    if (newContact === null) {
      return;
    }

    let pos = this.contacts.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }
    newContact.id = originalDocument.id;
    this.contacts[pos] = newContact;
    let contactsListClone = this.contacts.slice();
    this.contactIsSelectedEvent.next(contactsListClone);
  }

  getMaxId(): number {
    let maxId = 0;

    for (const contact of this.contacts) {
      const currentId = parseInt(contact.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
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

  this.contactIsSelectedEvent.next(this.contacts.slice());
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

ngOnDestroy(): void {
  this.contactIsSelectedEvent.unsubscribe();
}
}

