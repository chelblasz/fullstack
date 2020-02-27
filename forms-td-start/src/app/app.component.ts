import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @viewchild('f') signForm: NgForm;
  // default question = 'pet';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
}
