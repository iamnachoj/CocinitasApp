import {Component} from '@angular/core';
import {DataStorageService} from "../../shared/services/dataStorage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorageService : DataStorageService) {
  }
  saveData() {
    this.dataStorageService.saveRecipes();
  }

  fetchData() {
    this.dataStorageService.fetchRecipes()
  }
}
