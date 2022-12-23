import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  editMode = false;
  editedItemIndex: number;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
           .subscribe((index: number) => {
             this.editedItemIndex = index;
             this.editMode = true;
           });
  }
  onSubmit(form){
    const name = form.value.name;
    const amount = form.value.amount;
    this.shoppingListService.insertNewIngredient({name, amount})
    form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
