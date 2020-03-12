import { Injectable, OnDestroy } from "@angular/core";
import { Document } from "./document.model";
import { Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DocumentsService implements OnDestroy {
  selectedDocumentEvent = new Subject<Document[]>();
  documents: Document[];
  maxDocumentId: number;

  constructor(private http: HttpClient) {
    // this.getDocuments();
    // this.maxDocumentId = this.getMaxId();
  }

  storeDocuments() {
    let documents = JSON.stringify(this.documents);
    
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    
    this.http.put("https://chelseab-25822.firebaseio.com/documents.json", documents)
    .subscribe(response => {
      this.selectedDocumentEvent.next(this.documents.slice());
   });
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
    this.storeDocuments();
    //this.selectedDocumentEvent.next(this.documents.slice());
    /* documentsListClone = documents.slice()
      documentListChangedEvent.next(doumentsListClone)*/
  }

  addDocumnet(newDocument: Document) {
    if (newDocument === null) {
      return;
    }
    this.maxDocumentId++;
    newDocument.id = String(this.maxDocumentId);
    this.documents.push(newDocument);
    this.storeDocuments();
    //this.selectedDocumentEvent.next(this.documents.slice());
  }

  updateDocument(originalDocument: Document, newDocument: Document) {
    if (newDocument === null) {
      return;
    }

    let pos = this.documents.indexOf(originalDocument);
    if (pos < 0) {
      return;
    }
    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;
    let documentsListClone = this.documents.slice();
    this.storeDocuments();
    //this.selectedDocumentEvent.next(documentsListClone);
  }

  getMaxId(): number {
    let maxId = 0;

    for (const document of this.documents) {
      const currentId = parseInt(document.id, 10);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  getDocuments() {
    // return this.documents.slice();
    this.http
      .get("https://chelseab-25822.firebaseio.com/documents.json")
        .subscribe((res: Document[]) => {
          console.log(res);
          this.documents = res;
          console.log(this.documents);
          this.selectedDocumentEvent.next(this.documents.slice());
      });
  }

  getDocument(id: string): Document {
    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }
    return null;
  }

  ngOnDestroy(): void {
    this.selectedDocumentEvent.unsubscribe();
  }
}
