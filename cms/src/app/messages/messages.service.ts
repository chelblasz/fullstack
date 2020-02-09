import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
messageChangeEvent = new EventEmitter<Message>();
messages: Message[] = [ ];

  constructor() {
    this.messages = MOCKMESSAGES;
   }

   getMessage(id: string): Message {
    for (const message of  this.messages) {
      if (message.id === id) {
      return message;
      }
  }

    return null;
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }
}
