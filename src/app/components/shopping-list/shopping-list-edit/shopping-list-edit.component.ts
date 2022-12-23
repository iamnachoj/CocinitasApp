import {Component, OnDestroy, OnInit, Input, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {ShoppingListService} from "../shopping-list.service";
import {Ingredient} from "../../../shared/ingredient.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) shoppingListForm: NgForm;
  subscription: Subscription
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
           .subscribe((index: number) => {
             this.editMode = true;
             this.editedItemIndex = index;
             this.editedItem = this.shoppingListService.getIngredient(index);
             this.shoppingListForm.setValue({
               name: this.editedItem.name,
               amount: this.editedItem.amount
             })
           });
  }
  onSubmit(form){
    const name = form.value.name;
    const amount = form.value.amount;
      if(this.editMode){
        this.shoppingListService.updateIngredient(this.editedItemIndex, {name, amount})
      } else {
        this.shoppingListService.insertNewIngredient({name, amount});
      }
    this.editMode = false;
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onClear() {
    if (confirm('Are you sure you want to remove all the products from the shopping list?') === true){
      this.shoppingListService.clearAll();
      this.shoppingListForm.reset();
      this.editMode = false;
    }
  }
  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
