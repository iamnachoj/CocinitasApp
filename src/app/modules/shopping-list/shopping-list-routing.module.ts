import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./components/shopping-list/shopping-list-component";
import {RouterModule} from "@angular/router";

const shoppingListRoutes = [
    {path: "", component: ShoppingListComponent},
]
@NgModule({
    imports: [RouterModule.forChild(shoppingListRoutes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
