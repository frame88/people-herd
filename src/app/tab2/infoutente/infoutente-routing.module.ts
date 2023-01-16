import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { infoutentePage } from './infoutente.page';

const routes: Routes = [
  {
    path: '',
    component: infoutentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class infoutentePageRoutingModule {}
