import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Hanuman } from './pages/hanuman/hanuman';

export const routes: Routes = [
    { path: '' , component:Home },
    { path: 'festival/hanuman-jayanti' , component:Hanuman},
];
