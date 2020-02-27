import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];
  subscription: Subscription;

  constructor(private documentsService: DocumentsService, private router: Router,
    private route: ActivatedRoute) {}

ngOnInit() {
  this.documents = this.documentsService.getDocuments();
  this.subscription = this.documentsService.selectedDocumentEvent
    .subscribe(
      (documentList: Document[]) => {
        this.documents = documentList;
      }
    );
}
onNewDocument() {
  this.router.navigate(['new'], {relativeTo: this.route});
}
}
