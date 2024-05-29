import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GvaTabComponent, GvaCabeceraComponent, GvaTablaComponent } from 'ejemplo-angular'; 

 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GvaTabComponent, GvaCabeceraComponent, GvaTablaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent { 
  title = 'proyecto-prueba';
  logo="assets/gv_blanco.png";
}  