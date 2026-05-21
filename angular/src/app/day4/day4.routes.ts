import { Routes } from "@angular/router";
import { Day4MainComponent } from "./day4-main/day4-main.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PostsComponent } from "./posts/posts.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { authChildGuard } from "../shared/guards/auth-child.guard";

export const DAY4_ROUTES: Routes = [

  {
    path: '',
    component: Day4MainComponent,
    canActivateChild: [authChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'post/:id',
        component: PostDetailsComponent
      }
    ]
  }

];
