import { Component, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // <= import both
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-home',
  standalone: true,  
    imports: [HttpClientModule,CommonModule], 

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
