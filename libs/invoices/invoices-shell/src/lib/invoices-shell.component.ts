import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `<p>invoices-shell works!</p><router-outlet></router-outlet>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvoicesShellComponent {}
