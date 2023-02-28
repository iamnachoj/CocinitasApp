import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Recipe} from "../../shared/recipe.model";
import {DataStorageService} from "../../shared/services/dataStorage.service";
import {RecipeService} from "../../shared/services/recipe.service";

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
