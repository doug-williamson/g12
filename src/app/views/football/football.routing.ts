import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ContributorsComponent } from './contributors/contributors.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full',
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            breadcrumb: 'Football About'
        }
    },
    {
        path: 'users',
        component: UsersComponent,
        data: {
            breadcrumb: 'Football Users'
        }
    },
    {
        path: 'users/:id',
        component: UserComponent,
        data: {
            breadcrumb: 'Football User'
        }
    },
    {
        path: 'contributors',
        component: ContributorsComponent,
        data: {
            breadcrumb: 'Football Contributors'
        }
    },
    {
        path: 'contributors/:id',
        component: ContributorsComponent,
        data: {
            breadcrumb: 'Football Contributor'
        }
    },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
