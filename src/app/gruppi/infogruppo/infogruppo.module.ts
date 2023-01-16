import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { infogruppoPageRoutingModule } from './infogruppo-routing.module';

import { infogruppoPage } from './infogruppo.page';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    infogruppoPageRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRippleModule
  ],
  declarations: [infogruppoPage]
})
export class infogruppoPageModule {}
