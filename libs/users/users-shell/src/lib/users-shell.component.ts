import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `<p>users-shell works!</p><router-outlet></router-outlet>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersShellComponent {
  route = inject(ActivatedRoute);

  constructor() {
    console.log("mf1 UsersShellComponent")
    console.log(this.route.routeConfig)
  }
}
