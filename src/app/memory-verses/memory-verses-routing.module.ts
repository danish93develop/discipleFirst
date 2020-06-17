import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoryVersesPage } from './memory-verses.page';

const routes: Routes = [
  {
    path: '',
    component: MemoryVersesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoryVersesPageRoutingModule {}
