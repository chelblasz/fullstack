import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessagesService implements OnDestroy {
messageChangeEvent = new Subject<Message[]>();
messages: Message[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
   }

   addMessage(message: Message){
this.messages.push(message);
this.messageChangeEvent.next(this.messages.slice());
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

  
ngOnDestroy(): void {
  this.messageChangeEvent.unsubscribe();
}
}
