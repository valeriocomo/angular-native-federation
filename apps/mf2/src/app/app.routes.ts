import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: 'invoices',
        pathMatch: "full"
    },
    {
        path: 'invoices',
        loadChildren: () => import("@anf/invoices-shell").then(l => l.invoicesShellRoutes)
    }
];
