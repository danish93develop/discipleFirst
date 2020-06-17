import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResourceDetailPage } from './resource-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ResourceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResourceDetailPageRoutingModule {}
