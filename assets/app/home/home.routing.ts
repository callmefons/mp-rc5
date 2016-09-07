import {ModuleWithProviders} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {HomeComponent}       from './home.component';
import {HomeListComponent} from "./home-list.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: '', component: HomeListComponent}
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

