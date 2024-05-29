import { Component, Input } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';


interface ITab{
  nombre: string;
}

@Component({
  selector: 'gva-tab',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './gva-tab.component.html',
  styleUrl: './gva-tab.component.css'
})
export class GvaTabComponent {

  @Input()
  tabs: Array<string> = [ 
    'Tab 1',
    'Tab 2' 
    ];

}
