import {Injectable} from "@angular/core";
import {Recipe} from "../../shared/recipe.model";

@Injectable({
    providedIn: 'root'
 })

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Tortilla de patatas',
            'Classic Spanish omelette made with eggs and potatoes, optionally including onion. It is often served at room temperature as a tapa',
            'https://cdn.elcocinerocasero.com/imagen/receta/1000/2022-06-15-19-04-10/tortilla-de-patata.jpeg',

            "Peel the potatoes using a speed-peeler, then carefully cut them into thin slices. Pat the potato slices dry with a clean tea towel. " +
            "Peel and finely slice the onion. Drizzle 2 tablespoons of oil into a small frying pan over a medium heat, then add the onion and potatoes. " +
            "Turn the heat down to low and cook for 25 to 30 minutes, or until the onions are turning golden and the potato slices are cooked through. " +
            "Try not to stir it too much or the potatoes will break up – just use a fish slice to flip them over halfway through. " +
            "Crack the eggs into a mixing bowl, season with a tiny pinch of sea salt and black pepper, then whisk together with a fork. " +
            "When the onions and potatoes are cooked, remove the pan from the heat and carefully tip them into the eggs. " +
            "Transfer the mixture back into the frying pan and place it over a low heat. Cook for around 20 minutes, or until there’s almost no runny egg on top. " +
            "Use a fish slice to slightly lift and loosen the sides of the tortilla. " +
            "Carefully flip the pan over a dinner plate and tip out the tortilla, then slide it back into the pan and cook for another 5 minutes, or until golden and cooked through. " +
            "Turn out the tortilla onto a serving board, then cut into 6 wedges and serve hot or cold with a simple green salad.",
            [
                {name: "Waxy potatoes", amount: "300g"}, {name: "onion", amount: 1},
                {name: "olive oil", amount: "enough to cover potatoes in pan"},
                {name: "eggs", amount: 5}]
        ),
        new Recipe(
            'Gazpacho',
            'Cold soup and drink made of raw, blended vegetables. It originated in the southern regions of the Iberian peninsula and spread into other areas in Spain and Portugal.',
            'https://www.acouplecooks.com/wp-content/uploads/2021/07/Gazpacho-002s.jpg',

            "Combine tomatoes, pepper, cucumber, onion and garlic in a blender or, if using a hand blender, in a deep bowl. (If necessary, work in batches.) Blend at high speed until very smooth, at least 2 minutes, pausing occasionally to scrape down the sides with a rubber spatula. " +
            "With the motor running, add the vinegar and 2 teaspoons salt. Slowly drizzle in the olive oil. The mixture will turn bright orange or dark pink and become smooth and emulsified, like a salad dressing. If it still seems watery, drizzle in more olive oil until texture is creamy. " +
            "Strain the mixture through a strainer or a food mill, pushing all the liquid through with a spatula or the back of a ladle. Discard the solids. Transfer to a large pitcher (preferably glass) and chill until very cold, at least 6 hours or overnight. " +
            "Before serving, adjust the seasonings with salt and vinegar. If soup is very thick, stir in a few tablespoons ice water. Serve in glasses, over ice if desired, or in a bowl. A few drops of olive oil on top are a nice touch.",
            [
                {name: "mature tomatoes", amount: "1kg"},
                {name: "Long, light green pepper", amount: 1},
                {name: "Half Cucumber", amount: "5 to 10cm"},
                {name: "Garlic", amount: "2 cloves"},
                {name: "Vinegar, oil and salt", amount: "2 spoons each, just 1 teaspoon of salt"}]
        )]

    getRecipes(){
        return this.recipes.slice();
    }
    getRecipe(index) {
        return this.recipes.slice()[index]
    }
    addRecipe(recipe){
        this.recipes.push(recipe);
        return this.recipes.slice();
    }
    updateRecipe(updatedRecipe, indexOfUpdatedRecipe) {
        this.recipes[indexOfUpdatedRecipe] = {
            ...this.recipes[indexOfUpdatedRecipe],
            ...updatedRecipe
        };
    }
    deleteRecipe(index){
        this.recipes.splice(index, 1);
    }
}
