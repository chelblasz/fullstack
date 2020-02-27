import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
 selectedDocumentEvent = new EventEmitter<Document[]>();
 documents: Document[];

    constructor() {
      this.documents = MOCKDOCUMENTS;
     }

     deleteDocument(document: Document) {
      if (document === null) {
        return;
      }
      const pos = this.documents.indexOf(document);
      if (pos < 0) {
        return;
      }

      this.documents.splice(pos, 1);
      this.selectedDocumentEvent.emit(this.documents.slice());
     }
    

  getDocument(id: string): Document {
    for (const document of  this.documents) {
      if (document.id === id) {
      return document;
      }
  }

    return null;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }
  }
