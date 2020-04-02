import { Injectable, OnDestroy } from "@angular/core";
import { Contact } from "./contact.model";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContactService implements OnDestroy {
  contactIsSelectedEvent = new Subject<Contact[]>();
  contacts: Contact[] = [];
  maxContactId: number;

  constructor(private http: HttpClient) {
    // this.contacts = MOCKCONTACTS;
    // this.maxContactId = this.getMaxId();
  }

  storeContacts() {
    let contacts = JSON.stringify(this.contacts);

    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    this.http
      .put("https://chelseab-25822.firebaseio.com/contacts.json", contacts)
      .subscribe(response => {
        this.contactIsSelectedEvent.next(this.contacts.slice());
      });
  }

  getContacts() {
    this.http.get('https://chelseab-25822.firebaseio.com/contacts.json')
      .subscribe(
        (contacts: Contact[]) => {
          this.contacts = contacts;
          this.contacts.sort((a, b) => (a['name'] < b['name']) ? 1 : (a['name'] > b['name']) ? -1 : 0);
          this.contactIsSelectedEvent.next(this.contacts.slice());
        }, (error: any) => {
          console.log('something bad happened...');
        }
      );
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
    this.storeContacts();
    // this.contactIsSelectedEvent.next(this.contacts.slice());
  }

  addContact(newContact: Contact) {
    if (newContact === null) {
      return;
    }
    this.maxContactId++;
    newContact.id = String(this.maxContactId);
    this.contacts.push(newContact);
    this.storeContacts();
    // this.contactIsSelectedEvent.next(this.contacts.slice());
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
    this.storeContacts();
    // this.contactIsSelectedEvent.next(contactsListClone);
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

  // does this need to be Contacts?
  getContact(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }

    return null;

    
  }


  ngOnDestroy(): void {
    this.contactIsSelectedEvent.unsubscribe();
  }
}
