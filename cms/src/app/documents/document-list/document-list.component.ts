import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentsService: DocumentsService) {}

ngOnInit() {
  /* subscribe to the changed event this.___________(documents:Document[]) => {
    this.documents = documents}*/

  this.documents = this.documentsService.getDocuments();
}
  // onSelected(document: Document) {
  //   this.documentsService.selectedDocumentEvent.emit(document);
  // }

}
