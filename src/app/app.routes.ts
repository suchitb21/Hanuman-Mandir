import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 


export const routes: Routes = [
    { 
        path: '', 
        component: Home 
    },
    { 
        path: 'festival/hanuman-jayanti', 
        loadComponent: () => import('./pages/hanuman/hanuman').then(m => m.Hanuman)
    },

    { 
        path: 'festival/ram-navami', 
        loadComponent: () => import('./pages/ramnavami/ramnavami').then(m => m.Ramnavami)
    },
    { 
        path: 'festival/mahashivratri', 
        loadComponent: () => import('./pages/mahashivratri/mahashivratri').then(m => m.Mahashivratri)
    },
    { 
        path: 'festival/navratri', 
        loadComponent: () => import('./pages/navratri/navratri').then(m => m.Navratri)
    },
    { 
        path: 'seva', 
        loadComponent: () => import('./pages/seva/seva').then(m => m.Seva)
    },
    { 
        path: 'temple', 
        loadComponent: () => import('./pages/temple/temple').then(m => m.Temple)
    },
];