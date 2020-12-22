import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FootballRoutingModule } from './football.routing';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TeamsComponent } from './teams/teams.component';
import { TeamComponent } from './teams/team/team.component';
import { MatDividerModule } from '@angular/material/divider';
import { StreamComponent } from './stream/stream.component';
import { StaffComponent } from './staff/staff.component';

@NgModule({
  declarations: [AboutComponent, TeamsComponent, TeamComponent, StreamComponent, StaffComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,

    RouterModule,

    FootballRoutingModule,
  ],
})
export class FootballModule { }
