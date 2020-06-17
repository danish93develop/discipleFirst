import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaderNotesPage } from './leader-notes.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaderNotesPageRoutingModule {}
