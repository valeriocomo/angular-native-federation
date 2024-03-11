import { Injectable, inject } from '@angular/core';
import { UsersDataLayer } from '@anf/users/data-layer';
import { switchMap, shareReplay, startWith, BehaviorSubject, filter } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersDetailFacade {
    private readonly data = inject(UsersDataLayer);
    private readonly load$ = new BehaviorSubject<string>('')

    readonly item$ = this.load$.pipe(
        //filter(id => id),
        switchMap((id) => this.data.getById(id).pipe(shareReplay())),
        startWith(undefined)
    )
    load(id: string) {
        this.load$.next(id);
    }
}
