import { Routes } from '@angular/router';
import { Day1MainComponent } from './day1/day1-main/day1-main.component';
import { Day0MainComponent } from './day0/day0-main/day0-main.component';
import { Day2MainComponent } from './day2/day2-main/day2-main.component';
import { Day3MainComponent } from './day3/day3-main/day3-main.component';

export const routes: Routes = [
    {
        path: 'day0',
        component: Day0MainComponent
    },

    {
        path: 'day1',
        component: Day1MainComponent
    },
    {
        path: 'day2',
        component: Day2MainComponent
    },
    {
        path: 'day3',
        component: Day3MainComponent
    },
    {
        path: 'day4',

        loadChildren: () =>
            import('./day4/day4.routes')
                .then(m => m.DAY4_ROUTES)
    },

    {
        path: '',
        redirectTo: 'day0',
        pathMatch: 'full'
    },
];
