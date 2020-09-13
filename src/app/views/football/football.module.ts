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
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './users/user/user.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AboutComponent, UsersComponent, UserComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,

    RouterModule,

    FootballRoutingModule,
  ],
})
export class FootballModule { }
