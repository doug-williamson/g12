import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

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
        path: 'users/:userId',
        component: UserComponent,
        data: {
            breadcrumb: 'Football User'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
