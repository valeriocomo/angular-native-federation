import { Route } from '@angular/router';
import { InvoicesShellComponent } from './invoices-shell.component';

export const invoicesShellRoutes: Route[] = [
  {
    path: '',
    component: InvoicesShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        loadComponent: () => import('@anf/invoices-list')
      },
      {
        path: ':id/detail',
        loadComponent: () => import('@anf/invoices-detail').then(l => l.InvoicesDetailComponent)
      }
    ]
  },
];
