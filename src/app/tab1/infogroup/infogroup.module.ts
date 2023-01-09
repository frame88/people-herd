import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfogroupPageRoutingModule } from './infogroup-routing.module';

import { InfogroupPage } from './infogroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfogroupPageRoutingModule
  ],
  declarations: [InfogroupPage]
})
export class InfogroupPageModule {}
