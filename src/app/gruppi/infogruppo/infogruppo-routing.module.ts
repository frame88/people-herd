import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { infogruppoPage } from './infogruppo.page';

const routes: Routes = [
  {
    path: '',
    component: infogruppoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class infogruppoPageRoutingModule {}
