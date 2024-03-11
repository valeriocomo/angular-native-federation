import { AuthService } from '@anf/auth';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { UsersListFacade } from '@anf/users/domain';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink, AsyncPipe, NgFor],
  template: `
  <p>users-list works!</p> 
  <ul *ngFor="let item of (items$ | async)">
    <li>
      <a routerLink="detail/{{item.id}}" [relativeTo]="route.parent?.parent" >{{item.label}}</a>
    </li>
  </ul>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  readonly route = inject(ActivatedRoute)
  readonly auth = inject(AuthService)
  readonly facade = inject(UsersListFacade)

  readonly items$ = this.facade.items$;

  constructor() {
    this.auth.username$.pipe(takeUntilDestroyed()).subscribe(console.log)
  }

  ngOnInit(): void {
    this.facade.load();
  }

}
