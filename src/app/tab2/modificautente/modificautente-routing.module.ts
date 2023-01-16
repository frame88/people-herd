import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificautentePage } from './modificautente.page';

const routes: Routes = [
  {
    path: '',
    component: ModificautentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificautentePageRoutingModule {}
