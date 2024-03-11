import { Injectable, inject } from '@angular/core';
import { UsersDataLayer } from '@anf/users/data-layer';
import { switchMap, shareReplay, startWith, BehaviorSubject, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersListFacade {
    private readonly data = inject(UsersDataLayer);

    private readonly load$ = new BehaviorSubject<boolean>(false)

    readonly items$ = this.load$.pipe(
        filter(v =>v),
        switchMap(() => this.data.getAll().pipe(shareReplay())),
        startWith([])
    )

    load() {
        this.load$.next(true);
    }
}
