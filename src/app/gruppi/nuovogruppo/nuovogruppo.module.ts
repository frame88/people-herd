import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovogruppoPageRoutingModule } from './nuovogruppo-routing.module';

import { NuovogruppoPage } from './nuovogruppo.page';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovogruppoPageRoutingModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [NuovogruppoPage]
})
export class NuovogruppoPageModule {}
