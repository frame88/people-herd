import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermodPage } from './usermod.page';

const routes: Routes = [
  {
    path: '',
    component: UsermodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsermodPageRoutingModule {}
