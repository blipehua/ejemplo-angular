import { Component, Input } from '@angular/core';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


export interface Registre {
  POSITION: number;
  CONCEPTE: string;
  DESCRIPCIO: string;
  ORGANISME_EMISSOR: string;
  POSADA_DISPOSICIO: string;
  TIPUS_ENVIAMENT: string;
  TITULAR: string;
  ESTAT: string;
}

const ELEMENT_DATA: Registre[] = [
  {POSITION:1,CONCEPTE: '1', DESCRIPCIO: 'Hydrogen', ORGANISME_EMISSOR: 'o1', POSADA_DISPOSICIO: 'H', TIPUS_ENVIAMENT:'t1', TITULAR:'tit1', ESTAT:'e1'},
  {POSITION:2,CONCEPTE: '2', DESCRIPCIO: 'Helium', ORGANISME_EMISSOR: 'o2', POSADA_DISPOSICIO: 'He', TIPUS_ENVIAMENT:'t2', TITULAR:'tit2', ESTAT:'e2'},
  {POSITION:3,CONCEPTE: '3', DESCRIPCIO: 'Lithium', ORGANISME_EMISSOR: 'o3', POSADA_DISPOSICIO: 'Li', TIPUS_ENVIAMENT:'t3', TITULAR:'tit3', ESTAT:'e3'},
  {POSITION:4,CONCEPTE: '4', DESCRIPCIO: 'Beryllium', ORGANISME_EMISSOR: 'o4', POSADA_DISPOSICIO: 'Be', TIPUS_ENVIAMENT:'t4', TITULAR:'tit4', ESTAT:'e4'},
  {POSITION:5,CONCEPTE: '5', DESCRIPCIO: 'Boron', ORGANISME_EMISSOR: 'o5', POSADA_DISPOSICIO: 'B', TIPUS_ENVIAMENT:'t5', TITULAR:'tit5', ESTAT:'e5'},
  {POSITION:6,CONCEPTE: '6', DESCRIPCIO: 'Carbon', ORGANISME_EMISSOR: 'o6', POSADA_DISPOSICIO: 'C', TIPUS_ENVIAMENT:'t6', TITULAR:'tit6', ESTAT:'e6'},
  {POSITION:7,CONCEPTE: '7', DESCRIPCIO: 'Nitrogen', ORGANISME_EMISSOR: 'o7', POSADA_DISPOSICIO: 'N', TIPUS_ENVIAMENT:'t7', TITULAR:'tit7', ESTAT:'e7'},
  {POSITION:8,CONCEPTE: '8', DESCRIPCIO: 'Oxygen', ORGANISME_EMISSOR: 'o8', POSADA_DISPOSICIO: 'O', TIPUS_ENVIAMENT:'t8', TITULAR:'tit8', ESTAT:'e8'},
  {POSITION:9,CONCEPTE: '9', DESCRIPCIO: 'Fluorine', ORGANISME_EMISSOR: 'o9', POSADA_DISPOSICIO: 'F', TIPUS_ENVIAMENT:'t9', TITULAR:'tit9', ESTAT:'e9'},
  {POSITION:10,CONCEPTE: '10', DESCRIPCIO: 'Neon', ORGANISME_EMISSOR: 'o10', POSADA_DISPOSICIO: 'Ne', TIPUS_ENVIAMENT:'t10', TITULAR:'tit10', ESTAT:'e10'}

  
  
];

@Component({
  selector: 'gva-tabla',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './gva-tabla.component.html',
  styleUrl: './gva-tabla.component.css'
})
export class GvaTablaComponent {

  @Input()
  nombreColumnas: string[] = ['POSITION','CONCEPTE','DESCRIPCIO','ORGANISME_EMISSOR','POSADA_DISPOSICIO','TIPUS_ENVIAMENT','TITULAR','ESTAT'];

  @Input()
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
