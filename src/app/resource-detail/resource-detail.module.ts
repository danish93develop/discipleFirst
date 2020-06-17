import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceDetailPageRoutingModule } from './resource-detail-routing.module';

import { ResourceDetailPage } from './resource-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceDetailPageRoutingModule
  ],
  declarations: [ResourceDetailPage]
})
export class ResourceDetailPageModule {}
