import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { GvaMartePopupComponent, GvaPopup } from '../lib/gva-popup/gva-marte-popup.component';
// import { EjemploAngularModule } from '../lib/ejemplo-angular.module';

const meta: Meta<GvaPopup> = {
  title: 'GVA/Marte/gva-marte-popup',
  component: GvaPopup,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [GvaPopup,MatButtonModule, MatDividerModule],
    }),
  ],

  tags: ['autodocs'],
  parameters: {
    
    layout: 'fullscreen',
  },
  args: {
   nombre: 'Abrir',
  },
};

export default meta;
type Story = StoryObj<GvaMartePopupComponent>;

export const PopupSimple: Story = {
  args: {
   nombre: 'Abrir',
   
  },
};
