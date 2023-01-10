import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsermodPageRoutingModule } from './usermod-routing.module';

import { UsermodPage } from './usermod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsermodPageRoutingModule
  ],
  declarations: [UsermodPage]
})
export class UsermodPageModule {}
