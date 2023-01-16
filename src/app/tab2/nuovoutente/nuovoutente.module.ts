import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuovoutentePageRoutingModule } from './nuovoutente-routing.module';

import { NuovoutentePage } from './nuovoutente.page';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuovoutentePageRoutingModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [NuovoutentePage]
})
export class NuovoutentePageModule {}
