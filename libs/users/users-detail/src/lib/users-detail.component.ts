import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { UsersDetailFacade } from '@anf/users/domain';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgIf],
  template: `
  <p>users-detail works!</p>
  <p *ngIf="(item$ | async) as item">{{item.label}}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly facade = inject(UsersDetailFacade);

  readonly item$ = this.facade.item$;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('id')),
      tap(id => this.facade.load(id!)
      ))
      .subscribe()
  }
}
