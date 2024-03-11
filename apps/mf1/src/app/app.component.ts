import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  selector: 'anf-mf1-root',
  template: '<h1>Configuration</h1><router-outlet></router-outlet>',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mf1';

  constructor() {
    console.log('mf1:AppComponent')
  }
}
