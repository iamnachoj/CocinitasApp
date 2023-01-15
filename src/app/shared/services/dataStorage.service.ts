import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Recipe} from "../recipe.model";
import {RecipeService} from "./recipe.service";
import {map, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {}

    saveRecipes(){
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://cocinitasapp-51803-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(response => {
                console.log(response)
            })

    }

    fetchRecipes(){
        return this.http.get<Recipe[]>('https://cocinitasapp-51803-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
            .pipe(
                map( storeRecipes => {
                    if(!storeRecipes){
                        return []
                    }
                   return storeRecipes
                    }
                ),
                tap(storedRecipes => {
                    this.recipeService.setRecipes(storedRecipes)
                })
            )
    }
}
