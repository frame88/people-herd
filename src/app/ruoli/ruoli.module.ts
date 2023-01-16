import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ruoliPage } from './ruoli.page';

import { ruoliPageRoutingModule } from './ruoli-routing.module';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ruoliPageRoutingModule,
    MatInputModule,
    DragDropModule,
    MatRippleModule
  ],
  declarations: [ruoliPage]
})
export class ruoliPageModule {}
