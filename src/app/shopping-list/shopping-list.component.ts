import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent  {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 10),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Pears', 10)
  ];

 onIngredientAdded(ingredient: Ingredient){
   this.ingredients.push(ingredient);
 }

}
