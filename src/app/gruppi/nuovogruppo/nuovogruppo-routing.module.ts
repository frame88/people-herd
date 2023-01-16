import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovogruppoPage } from './nuovogruppo.page';

const routes: Routes = [
  {
    path: '',
    component: NuovogruppoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovogruppoPageRoutingModule {}
