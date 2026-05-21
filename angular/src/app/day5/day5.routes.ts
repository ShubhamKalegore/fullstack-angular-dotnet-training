import { Routes } from '@angular/router';

import { Day5MainComponent } from './day5-main/day5-main.component';
import { ReactiveFormBuilderComponent } from './reactive-form-builder/reactive-form-builder.component';
import { ReactiveFormGroupComponent } from './reactive-form-group/reactive-form-group.component';
import { TemplateFormComponent } from './template-form/template-form.component';

export const DAY5_ROUTES: Routes = [
  {
    path: '',
    component: Day5MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'template-form',
        pathMatch: 'full'
      },
      {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'reactive-form-group',
        component: ReactiveFormGroupComponent
      },
      {
        path: 'reactive-form-builder',
        component: ReactiveFormBuilderComponent
      }
    ]
  }
];
