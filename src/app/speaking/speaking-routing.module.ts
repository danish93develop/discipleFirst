import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakingPage } from './speaking.page';

const routes: Routes = [
  {
    path: '',
    component: SpeakingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakingPageRoutingModule {}
