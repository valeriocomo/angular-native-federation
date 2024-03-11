import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const appRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: "full"
    },
    {
        path: 'configuration',
        loadChildren: () =>
            loadRemoteModule('mf1', './Routes').then((m) => m.appRoutes),
    },    
    {
        path: 'documents',
        loadChildren: () =>
            loadRemoteModule('mf2', './Routes').then((m) => m.appRoutes),
    },

];
