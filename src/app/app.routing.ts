import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FootballComponent } from './views/football/football.component';
import { ContributorsComponent } from './views/contributors/contributors.component';
import { PodcastComponent } from './views/podcast/podcast.component';
import { StreamingComponent } from './views/streaming/streaming.component';
import { UpcomingEventsComponent } from './views/upcoming-events/upcoming-events.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'football',
    component: FootballComponent
  },
  {
    path: 'contributors',
    component: ContributorsComponent,
  },
  {
    path: 'podcast',
    component: PodcastComponent,
  },
  {
    path: 'streaming',
    component: StreamingComponent,
  },
  {
    path: 'upcoming-events',
    component: UpcomingEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouting {}
