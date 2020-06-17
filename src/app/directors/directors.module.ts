import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectorsPageRoutingModule } from './directors-routing.module';

import { DirectorsPage } from './directors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectorsPageRoutingModule
  ],
  declarations: [DirectorsPage]
})
export class DirectorsPageModule {}
