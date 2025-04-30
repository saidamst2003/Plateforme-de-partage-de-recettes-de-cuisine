import { Component, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // <= import both
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,  
  imports: [HttpClientModule,CommonModule], 
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  CardList: any[] = [];
  
  http = inject(HttpClient);

  getAllCars() {
    this.http.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .subscribe((res: any) => {
        this.CardList = res.meals; // Correction ici, pas res.data
      });
  }

  constructor() {
    this.getAllCars(); // appeler la méthode dans le constructeur
  }
}
