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
  },
  {
    path: 'nuovogruppo',
    loadChildren: () => import('./nuovogruppo/nuovogruppo.module').then( m => m.NuovogruppoPageModule)
  },
  {
    path: 'tabs/gruppi/nuovogruppo',
    loadChildren: () => import('./nuovogruppo/nuovogruppo.module').then( m => m.NuovogruppoPageModule)
  },
  {
    path: 'modificagruppo',
    loadChildren: () => import('./modificagruppo/modificagruppo.module').then( m => m.ModificagruppoPageModule)
  },
  {
    path: 'tabs/gruppi/modificagruppo/:id',
    loadChildren: () => import('./modificagruppo/modificagruppo.module').then( m => m.ModificagruppoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class gruppiPageRoutingModule {}
