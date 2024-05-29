import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { GvaTabComponent } from '../lib/gva-tab/gva-tab.component';

import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
// import { EjemploAngularModule } from '../lib/ejemplo-angular.module';

const meta: Meta<GvaTabComponent> = {
  title: 'GVA/General/gva-tab',
  component: GvaTabComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [BrowserAnimationsModule, GvaTabComponent, MatButtonModule, MatDividerModule],
      providers: [
        provideAnimations()
      ]
    }),
  ],

  tags: ['autodocs'],
  parameters: {

    layout: 'fullscreen',
  },
  argTypes: {
    tabs: {
      control: { type: 'array' },
      description: 'Nombre de las tabs y contenido',
      defaultValue: [
        'Tab 1',
        'Tab 2'
      ]

    }
  }
};

export default meta;
type Story = StoryObj<GvaTabComponent>;

export const TabSimple: Story = {
  args: {
    tabs: [
      'Tab 1',
      'Tab 2' 
    ]
  }
};