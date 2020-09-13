import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatListModule,
    RouterModule,
  ],
  declarations: [HomeComponent],

})
export class HomeModule { }
