import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header.component';
import { ContactsDetailComponent } from './contact/contacts-detail/contacts-detail.component';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactItemComponent } from './contact/contact-list/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { Document } from './documents/document.list/document.list.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    ContactsDetailComponent,
    ContactListComponent,
    ContactItemComponent,
    DocumentsComponent,
    Document.ListComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
