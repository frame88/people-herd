import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { infoutentePageRoutingModule } from './infoutente-routing.module';

import { infoutentePage } from './infoutente.page';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { IonCustomScrollbarModule } from 'ion-custom-scrollbar';
import {MatSelectModule} from '@angular/material/select';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    infoutentePageRoutingModule,
    MatInputModule,
    MatIconModule,
    IonCustomScrollbarModule,
    MatSelectModule,
    MatRippleModule
  ],
  declarations: [infoutentePage]
})
export class infoutentePageModule {}
