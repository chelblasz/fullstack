import { Injectable, EventEmitter, OnDestroy } from "@angular/core";
import { Message } from "./message.model";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MessagesService implements OnDestroy {
  messageChangeEvent = new Subject<Message[]>();
  messages: Message[];
  maxMessageId: number;

  constructor(private http: HttpClient) {}

  storeMessages() {
    let documents = JSON.stringify(this.messages);

    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    this.http
      .put("https://chelseab-25822.firebaseio.com/messages.json", this.messages)
      .subscribe(response => {
        this.messageChangeEvent.next(this.messages.slice());
      });
  }

  // initMessages() {

  // }

  addMessage(message: Message) {
    this.messages.push(message);
    // this.messageChangeEvent.next(this.messages.slice());
    this.storeMessages();
  }

  getMaxId(): number {
    let maxId = 0;

    for (const message of this.messages) {
      const currentId = parseInt(message.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  getMessages() {
    this.http
    .get("https://chelseab-25822.firebaseio.com/messages.json")
    .subscribe((res: Message[]) => {
      console.log(res);
      this.messages = res;
      console.log(this.messages);
      // this.messageChangeEvent.next(this.messages.slice());
      this.storeMessages();
    });
}
  
  
  getMessage(id: string): Message {
    for (const message of this.messages) {
      if (message.id === id) {
        return message;
      }
    }

    return null;
  }

  ngOnDestroy(): void {
    this.messageChangeEvent.unsubscribe();
  }
}
