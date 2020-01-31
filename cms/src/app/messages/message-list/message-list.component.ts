import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
// need an @input to listen for output from messageEditComponent
// need an @output to send information to messageItemComponent
messages: Message[] = [
  new Message('1', 'Subject', 'I like to read', 'Sarah'),
  new Message('2', 'Subject2', 'I like to sleep', 'John')
];
@Input() message: Message;
// OUTPUT SELECTED CONTACT
// @Output() contactIsSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    // this.contactIsSelected.emit();
  }

}
