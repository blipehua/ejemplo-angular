import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'gva-popup',
  template: '<button mat-button (click)="abrir()">{{nombre}}</button>',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class GvaPopup {

  @Input()
  nombre:string='Abrir';

  constructor(public dialog: MatDialog) {}

  abrir() {
    const dialogRef = this.dialog.open(GvaMartePopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'gva-marte-popup',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './gva-marte-popup.component.html',
  styleUrl: './gva-marte-popup.component.css'
})
export class GvaMartePopupComponent {

}


