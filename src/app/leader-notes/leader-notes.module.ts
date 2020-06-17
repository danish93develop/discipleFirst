import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaderNotesPageRoutingModule } from './leader-notes-routing.module';

import { LeaderNotesPage } from './leader-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaderNotesPageRoutingModule
  ],
  declarations: [LeaderNotesPage]
})
export class LeaderNotesPageModule {}
