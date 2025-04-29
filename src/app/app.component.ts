import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{NavComponent} from'./nav/nav.component';
import{HomeComponent} from'./home/home.component';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, HomeComponent, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recetteS';
}
