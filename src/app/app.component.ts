import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import the MatToolbarModule
import { FlexLayoutModule } from '@angular/flex-layout'; // Import the FlexLayoutModule
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-root',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, FlexLayoutModule, RouterLink, RouterLinkActive ], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('buttonHover', [
      state('hover', style({
        transform: 'scale(1.1)',
        backgroundColor: '#1e88e5' // Optional: change color on hover
      })),
      state('normal', style({
        transform: 'scale(1)',
        backgroundColor: '#2596be' // Original color
      })),
      transition('normal <=> hover', animate('300ms ease-in-out')),
    ]),
  ]
})
export class AppComponent {
  title = 'ang-standalone';
  hoverState1 = 'normal';
  hoverState2 = 'normal';

  onMouseEnter(button: number) {
    switch (button) {
      case 1:
        this.hoverState1 = 'hover';
        break;
      case 2:
        this.hoverState2 = 'hover';
        break;
    }
  }

  onMouseLeave(button: number) {
    switch (button) {
      case 1:
        this.hoverState1 = 'normal';
        break;
      case 2:
        this.hoverState2 = 'normal';
        break;
    }
  }
}
