import { Route } from '@angular/router';
import { UsersDetailComponent } from './users-detail.component';

export const usersDetailRoutes: Route[] = [
  { path: ':id', component: UsersDetailComponent },
];
