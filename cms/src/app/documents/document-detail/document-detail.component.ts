import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  selectedDocument: Document;
  @Input() document: Document;

  constructor(private documentsService: DocumentsService) {}

  ngOnInit() {
      // this.documentsService.selectedDocumentEvent.subscribe((document: Document) => {
      //   this.selectedDocument = document;
      // });
    }}
