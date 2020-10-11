import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { TeamsComponent } from './teams/teams.component';

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
        path: 'teams',
        component: TeamsComponent,
        data: {
            breadcrumb: 'Football Teams'
        }
    },
    {
        path: 'contributors',
        component: ContributorsComponent,
        data: {
            breadcrumb: 'Football Contributors'
        }
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
