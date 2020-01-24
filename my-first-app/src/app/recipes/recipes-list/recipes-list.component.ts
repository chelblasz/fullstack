import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test', 'this is a test', 'https://cdn2.iconfinder.com/data/icons/bakery-related-line/64/bakery_pastry_cooking-06-512.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
