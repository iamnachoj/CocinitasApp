import {Component, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();

  onAddIngredient(name, amount){
    this.newIngredient.emit({name: name, amount: amount})
  }
}
