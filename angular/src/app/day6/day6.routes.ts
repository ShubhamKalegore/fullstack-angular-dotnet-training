import { Routes } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { Day6MainComponent } from './day6-main/day6-main.component';
import { ProductsComponent } from './products/products.component';
import { SessionStorageComponent } from './session-storage/session-storage.component';

export const DAY6_ROUTES: Routes = [
  {
    path: '',
    component: Day6MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'counter',
        pathMatch: 'full'
      },
      {
        path: 'counter',
        component: CounterComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'session-storage',
        component: SessionStorageComponent
      }
    ]
  }
];
