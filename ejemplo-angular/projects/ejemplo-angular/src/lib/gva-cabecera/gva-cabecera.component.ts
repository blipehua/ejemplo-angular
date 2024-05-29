import { Component, Injectable, Input, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

 

@Component({
  selector: 'gva-cabecera',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './gva-cabecera.component.html',
  styleUrl: './gva-cabecera.component.css'
})

export class GvaCabeceraComponent {

  @Input() logo = '/gv_blanco.png';
  @Input() ci: string = 'Dinote';
  @Input() usuario: string = 'Antonio Martínez';
  @Input() fecha: string = '14/05/2024';
}
