import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuovoutentePage } from './nuovoutente.page';

const routes: Routes = [
  {
    path: '',
    component: NuovoutentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuovoutentePageRoutingModule {}
