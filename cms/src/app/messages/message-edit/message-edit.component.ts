import { Component, OnInit, ViewChild, EventEmitter, ElementRef, Output } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';
@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
// @output emit information to messageListComponent
  currentSender = '20';
  @ViewChild('subjectInput', { static: false }) subjectInputRef: ElementRef;
  @ViewChild('messageTextInput', { static: false }) messageTextInputRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  constructor(private messageService: MessagesService) {}

  ngOnInit() {}

  onSendMessage() {
    const subject = this.subjectInputRef.nativeElement.value;
    const messageText = this.messageTextInputRef.nativeElement.value;
    const newMessage = new Message('1', subject, messageText, this.currentSender);
    this.messageService.addMessage(newMessage);
    // function onClear();
    // HELP
}

}
