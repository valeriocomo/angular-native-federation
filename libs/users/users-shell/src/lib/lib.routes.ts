import { Route } from '@angular/router';
import { UsersShellComponent } from './users-shell.component';

export const usersShellRoutes: Route[] = [
  {
    path: '', 
    component: UsersShellComponent, 
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadChildren: () => import('@anf/users-list').then(l => l.usersListRoutes)
      },
      {
        path: 'detail',
        loadChildren: () => import('@anf/users-detail').then(l => l.usersDetailRoutes)
      }
    ]
  },
];
