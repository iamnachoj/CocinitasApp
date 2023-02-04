import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Recipe} from "./recipe.model";
import {DataStorageService} from "./services/dataStorage.service";
import {RecipeService} from "./services/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeResolver implements Resolve<any>{

    constructor(private dataStorageService : DataStorageService, private recipeService: RecipeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Recipe[] {
        const recipes = this.recipeService.getRecipes();
        if(recipes.length === 0){
            this.dataStorageService.fetchRecipes();
        } else {
            return recipes;
        }
    }
}
