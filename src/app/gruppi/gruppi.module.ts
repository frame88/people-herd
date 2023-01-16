import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { gruppiPage } from './gruppi.page';

import { gruppiPageRoutingModule } from './gruppi-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    gruppiPageRoutingModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatRippleModule
    ],
  declarations: [gruppiPage]
})
export class gruppiPageModule {}
