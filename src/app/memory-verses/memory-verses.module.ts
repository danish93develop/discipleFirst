import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoryVersesPageRoutingModule } from './memory-verses-routing.module';

import { MemoryVersesPage } from './memory-verses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoryVersesPageRoutingModule
  ],
  declarations: [MemoryVersesPage]
})
export class MemoryVersesPageModule {}
