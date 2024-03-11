import { AuthService } from '@anf/auth';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `<p>invoices-list works!</p> <a routerLink="1/detail" [relativeTo]="route.parent" >Invoice Detail</a>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InvoicesListComponent {
  readonly route = inject(ActivatedRoute)
  readonly auth = inject(AuthService)

  constructor() {
    this.auth.setUsername('Mike Brown')
  }
}
