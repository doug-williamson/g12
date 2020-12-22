import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { RhombusComponentsModule } from '@dougwilliamson/rhombus';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,

    RhombusComponentsModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,

    RouterModule,
  ],
  declarations: [HomeComponent],

})
export class HomeModule { }
