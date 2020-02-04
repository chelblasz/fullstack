import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document( '1',
    'Bro. Jackson',
    'description1',
    'https://web.byui.edu/Directory/Employee/jacksonk.jpg', null),
    new Document( '2',
    'Bro. Barzee',
    'description2',
    'https://web.byui.edu/Directory/Employee/barzeer.jpg', null)
  ];

  constructor() { }

  ngOnInit() {
  }
  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
