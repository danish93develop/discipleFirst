import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceSingleContentPageRoutingModule } from './resource-single-content-routing.module';

import { ResourceSingleContentPage } from './resource-single-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceSingleContentPageRoutingModule
  ],
  declarations: [ResourceSingleContentPage]
})
export class ResourceSingleContentPageModule {}
