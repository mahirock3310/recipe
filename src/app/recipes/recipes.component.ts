import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipes[]=[
    new Recipes('Luci','made by flower','http://www.scratchingcanvas.com/wp-content/uploads/2015/10/Luchi.1-3-400x600@2x.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
