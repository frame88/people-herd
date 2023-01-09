import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfogroupPage } from './infogroup.page';

const routes: Routes = [
  {
    path: '',
    component: InfogroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfogroupPageRoutingModule {}
