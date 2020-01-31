import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  @Output() messageSelected = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }
    onSelected() {
      this.messageSelected.emit();
    }

}
