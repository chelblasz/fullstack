import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';
import { Contact } from '../../contact/contact.model';
import { ContactService } from '../../contact/contact.service';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  @Output() contactIsSelected = new EventEmitter<void>();
  messageSender = '';
  canEdit = false;

    constructor(private contactService: ContactService) { }

    ngOnInit() {
      const contact: Contact = this.contactService.getContact(this.message.sender);
      this.messageSender = contact.name;
    }

    }
