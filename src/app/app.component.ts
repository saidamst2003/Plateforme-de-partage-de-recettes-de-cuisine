import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app';
 

}