import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Hanuman } from './pages/hanuman/hanuman';
import { Seva } from './pages/seva/seva';
import { Temple } from './pages/temple/temple';

export const routes: Routes = [
    { path: '' , component:Home },
    { path: 'festival/hanuman-jayanti' , component:Hanuman},
    { path: 'seva' , component:Seva},
    { path: 'temple' , component:Temple},
];
