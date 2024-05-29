import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'lib-ejemplo-angular',
  templateUrl: './ejemplo-angular.component.html',
  standalone: true,
  imports: [MatButtonModule,MatDividerModule],
  styles: [
  ]
})
export class EjemploAngularComponent {

  /**
   * Esta es la entrada a la aplicación
   */
  @Input()
  label = 'Button';

  
}
