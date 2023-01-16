import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificautentePageRoutingModule } from './modificautente-routing.module';

import { ModificautentePage } from './modificautente.page';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificautentePageRoutingModule,
    MatRippleModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [ModificautentePage]
})
export class ModificautentePageModule {}
