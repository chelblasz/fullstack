import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
 selectedDocumentEvent = new EventEmitter<Document>();
 documents: Document[];

    constructor() {
      this.documents = MOCKDOCUMENTS;
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
