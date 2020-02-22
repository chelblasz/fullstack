import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // contactIsSelected: Contact;

  constructor() {} //private contactService: ContactService

  ngOnInit() {
    // this.contactService.contactIsSelectedEvent.subscribe((contact: Contact) => {
    //   this.contactIsSelected = contact;
    // });
  }
}
