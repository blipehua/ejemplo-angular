import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { GvaCabeceraComponent } from '../lib/gva-cabecera/gva-cabecera.component';
// import { EjemploAngularModule } from '../lib/ejemplo-angular.module';

const meta: Meta<GvaCabeceraComponent> = {
  title: 'GVA/General/gva-cabecera',
  component: GvaCabeceraComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [GvaCabeceraComponent,MatButtonModule, MatDividerModule],
    }),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    ci:{
      control: { type:'text'},
      description: 'Nombre del CI',
      defaultValue: 'Dinote'

    },
    logo:{
      description: 'Logo de la cabecera',
      options: ['gv_blanco.png', 'gv_rojo.png', 'gv_negro.png'],
      control: { type:'select'}
    } 
  },
};

export default meta;
type Story = StoryObj<GvaCabeceraComponent>;

export const Dinote: Story = {
  args: {
   ci: 'Dinote'
   
  }
};



// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Tramita: Story = {
  args: {
    ci: 'Tramita'
   
  },
};
