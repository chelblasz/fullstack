import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
contacts: Contact[] = [];

constructor(private contactService: ContactService) {}

ngOnInit() {
  /* subscribe to the changed event this.___________(contacts: contact[]) => {
    this.contacts = contact}*/
  this.contacts = this.contactService.getContacts();
}

// onSelected(contact: Contact) {
//   this.contactService.contactIsSelectedEvent.emit(contact);
// }
}
