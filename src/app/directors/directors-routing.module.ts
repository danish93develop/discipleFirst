import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectorsPage } from './directors.page';

const routes: Routes = [
  {
    path: '',
    component: DirectorsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectorsPageRoutingModule {}
