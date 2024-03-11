import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersDataLayer {

  getAll() {
    console.log('getAll')
    return of([{
      id: 1,
      label: 'Fake Username'
    }])
  }

  getById(id: string) {
    return of({
      id: 1,
      label: 'Fake Username'
    })
  }
}
