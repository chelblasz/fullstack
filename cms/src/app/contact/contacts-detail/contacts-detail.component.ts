import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
contact: Contact;
id: string;

constructor(private ContactService: ContactService,  
  private route: ActivatedRoute, 
  private router: Router) {}

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
          this.id = params['id'];
      this.contact = this.ContactService.getContact(this.id);
    }
    )
  }
  onDelete() {
    this.ContactService.deleteContact(this.contact);
    this.router.navigate((['/contacts']), {relativeTo: this.route});
  }
}