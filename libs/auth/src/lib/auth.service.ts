import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly username = new BehaviorSubject('')

  readonly username$ = this.username.asObservable()

  constructor(@Optional() @SkipSelf() a: AuthService) {
    if(a) {
      throw new Error('Must be singleton')
    }
  }

  setUsername(username: string) {
    this.username.next(username)
  }
}
