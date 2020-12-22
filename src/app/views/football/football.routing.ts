import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { StreamComponent } from './stream/stream.component';
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
		path: 'stream',
		component: StreamComponent,
		data: {
			breadcrumb: 'Stream'
		},
	},
	{
		path: 'teams',
		component: TeamsComponent,
		data: {
			breadcrumb: 'Football Teams'
		}
	},
	{
		path: 'blog',
		loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
		data: {
			breadcrumb: 'Blog',
		},
	},
	{
		path: 'staff',
		component: StaffComponent,
		data: {
			breadcrumb: 'Football Staff'
		}
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballRoutingModule {}
