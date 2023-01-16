import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificagruppoPageRoutingModule } from './modificagruppo-routing.module';

import { ModificagruppoPage } from './modificagruppo.page';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificagruppoPageRoutingModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [ModificagruppoPage]
})
export class ModificagruppoPageModule {}
