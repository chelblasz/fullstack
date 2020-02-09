import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  contactIsSelected: Contact;
@Input() contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contactService.contactIsSelectedEvent.subscribe((contact: Contact) => {
    this.contactIsSelected = contact;
  });
 }}
