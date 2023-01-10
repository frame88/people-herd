import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsermodPageRoutingModule } from './usermod-routing.module';

import { UsermodPage } from './usermod.page';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsermodPageRoutingModule,
    MatInputModule

  ],
  declarations: [UsermodPage]
})
export class UsermodPageModule {}
