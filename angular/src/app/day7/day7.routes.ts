import { Routes } from "@angular/router";
import { Day7MainComponent } from "./day7-main/day7-main.component";
import { OnpushDemoComponent } from "./onpush-demo/onpush-demo.component";

export const DAY7_ROUTES: Routes = [

  {
    path: '',
    component: Day7MainComponent,

    children: [

      {
        path: '',
        redirectTo: 'onpush-demo',
        pathMatch: 'full'
      },

      {
        path: 'onpush-demo',
        component: OnpushDemoComponent
      },

    ]
  }

];
