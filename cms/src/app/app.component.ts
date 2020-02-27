import { Component } from '@angular/core';
// import FormGroup, formControl,} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'cms';
  loadedFeature = 'documents';
  // signupForm: FormGroup;

  // ngoninit() {}

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}