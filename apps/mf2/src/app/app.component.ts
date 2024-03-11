import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'anf-mf2-root',
  template: `<h1>Documents</h1><router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {
  title = 'mf2';
}
