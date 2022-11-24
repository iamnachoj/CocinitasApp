import {Ingredient} from "./ingredient.model"

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public preparationDetails: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, preparationDetails: string, ingredients: Ingredient[]){
   this.name = name;
   this.description = description
   this.imagePath = imagePath
   this.preparationDetails = preparationDetails
   this.ingredients = ingredients
  }
}
