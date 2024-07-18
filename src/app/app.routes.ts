import { Routes } from '@angular/router';
import { EagerLoadingComponent } from './eager-loading/eager-loading.component';

export const routes: Routes = [


    {
        path: 'eager-loading',
        component: EagerLoadingComponent
    },
    {
        path: 'on-demand-loading',
        loadComponent: () => import('./on-demand-load/on-demand-load.component').then(m => m.OnDemandLoadComponent)
    }

];
