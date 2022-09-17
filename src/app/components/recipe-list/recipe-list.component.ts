import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe(
      'Solomillo al Whisky',
      'El solomillo al whisky es una de las recetas más conocidas en los bares de tapas de Sevilla. Normalmente se acompaña con unas ricas patatas fritas pero puedes acompañarlo igualmente con una buena ensalada o con arroz blanco y tienes un plato estupendo para tu comida del día a día.',
      'https://yhoyquecomemos.com/wp-content/uploads/2022/01/receta-de-solomillo-d-cerdo-al-whisky.jpg.webp'
  )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
