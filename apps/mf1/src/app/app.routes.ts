import { Component } from '@angular/core';
import { Route, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';

// @Component({standalone: true, imports: [RouterOutlet], template: `<router-outlet></router-outlet>`})
// class EntryComponent {
//     constructor() {
//         console.log("EntryComponent")
//     }
// }

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },
    {
        path: 'users',
        loadChildren: () => import("@anf/users-shell").then(l => l.usersShellRoutes)
        // loadComponent: () => import("@anf/users-shell").then(l => l.UsersShellComponent)
    }


]

// export const appRoutes: Route[] = [
//     {
//         path: '',
//         component: EntryComponent,
//         pathMatch: "full",
//         children: [
//             {
//                 path: 'users',
//                 loadChildren: () => import("@anf/users-shell").then(l => l.usersShellRoutes)
//             },
//             {
//                 path: '',
//                 pathMatch: 'full',
//                 redirectTo: 'users'
//             }

//         ]
//     },

// ];
