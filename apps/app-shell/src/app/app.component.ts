import { AuthService } from '@anf/auth';
import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink, RouterModule } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterLink, RouterModule],
  selector: 'anf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'app-shell';
  readonly auth = inject(AuthService)

  constructor() {
    this.auth.setUsername('John Green')
    this.auth.username$.pipe(
      takeUntilDestroyed(),
      tap(u => console.log(`AppComponent: ${u}`))
    )
      .subscribe()
  }
}
