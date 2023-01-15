import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfogroupPageRoutingModule } from './infogroup-routing.module';

import { InfogroupPage } from './infogroup.page';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfogroupPageRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRippleModule
  ],
  declarations: [InfogroupPage]
})
export class InfogroupPageModule {}
