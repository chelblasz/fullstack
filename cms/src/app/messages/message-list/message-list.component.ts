import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

messages: Message[] = [];

  constructor(private messagesService: MessagesService) { }
// call the get messages function here.

  ngOnInit() {
    this.messages = this.messagesService.getMessages();
  }
  onSelected(messages: Message) {
    this.messagesService.messageChangeEvent.emit(messages);
  }

}
