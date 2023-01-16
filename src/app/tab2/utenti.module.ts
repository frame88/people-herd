import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { utentiPage } from './utenti.page';

import { utentiPageRoutingModule } from './utenti-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    utentiPageRoutingModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatRippleModule
  ],
  declarations: [utentiPage]
})
export class utentiPageModule {}
