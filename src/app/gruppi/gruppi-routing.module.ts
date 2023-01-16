import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { gruppiPage } from './gruppi.page';

const routes: Routes = [
  {
    path: '',
    component: gruppiPage,
  },
  {
    path: 'infogruppo',
    loadChildren: () => import('./infogruppo/infogruppo.module').then( m => m.infogruppoPageModule),
  },
  {
    path: 'tabs/gruppi/infogruppo/:id',
    loadChildren: () => import('./infogruppo/infogruppo.module').then( m => m.infogruppoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gruppiPageRoutingModule {}
