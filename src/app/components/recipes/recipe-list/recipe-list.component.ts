import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [new Recipe(
        'Solomillo al Whisky',
        'Una de las recetas más conocidas en los bares de tapas de Sevilla. Normalmente se acompaña con patatas fritas.',
        'http://estoyhechouncocinillas.com/wp-content/uploads/2022/04/solomillo-al-whisky-sevillano.jpg'
    ),
    new Recipe('Gazpacho Andaluz', 'Sopa fría con varios ingredientes como aceite de oliva, vinagre, agua, hortalizas crudas, generalmente tomates, pepinos, pimientos y ajo.', 'https://www.acouplecooks.com/wp-content/uploads/2021/07/Gazpacho-002s.jpg')]

    constructor() {
    }

    ngOnInit(): void {
    }

}
