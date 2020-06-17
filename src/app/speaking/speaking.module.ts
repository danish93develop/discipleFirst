import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeakingPageRoutingModule } from './speaking-routing.module';

import { SpeakingPage } from './speaking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakingPageRoutingModule
  ],
  declarations: [SpeakingPage]
})
export class SpeakingPageModule {}
