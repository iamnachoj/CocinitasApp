import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient(name, amount){
     this.shoppingListService.insertNewIngredient({name, amount})
  }
}
