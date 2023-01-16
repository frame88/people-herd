import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificagruppoPage } from './modificagruppo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificagruppoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificagruppoPageRoutingModule {}
