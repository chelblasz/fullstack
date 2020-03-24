import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
contacts: Contact[];
subscription: Subscription;

constructor(private contactService: ContactService, private router: Router,
  private route: ActivatedRoute) {}

ngOnInit() {
    // this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactIsSelectedEvent
    .subscribe(
      (contactsList: Contact[]) => {
        this.contacts = contactsList;
      }
    );
}

onNewContact() {
  this.router.navigate(['new'], {relativeTo: this.route});
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}

// onSelected(contact: Contact) {
//   this.contactService.contactIsSelectedEvent.emit(contact);
// }
}
