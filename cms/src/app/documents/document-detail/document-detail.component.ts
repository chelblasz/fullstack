import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Document } from '../document.model';
import { WinRefService } from '../../win-ref.service';
import { DocumentsService } from '../documents.service';

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  nativeWindow: any;
 document: Document;
 id: string;

  constructor(private documentsService: DocumentsService, 
    private windowRefService: WinRefService, 
    private route: ActivatedRoute, 
    private router: Router,
    ) {
  this.nativeWindow = windowRefService.getNativeWindow();
    }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
          this.id = params['id'];
      this.document = this.documentsService.getDocument(this.id);
    }
    )
  }

  onView() {
    if (this.document.url) {
      this.nativeWindow.open(this.document.url);
    }
  }
  onDelete() {
    this.documentsService.deleteDocument(this.document);
    this.router.navigate((['/documents']), {relativeTo: this.route});
  }
}
