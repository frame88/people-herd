import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { utentiPage } from './utenti.page';

const routes: Routes = [
  {
    path: '',
    component: utentiPage,
  },
  {
    path: 'infoutente',
    loadChildren: () => import('./infoutente/infoutente.module').then( m => m.infoutentePageModule)
  },
  {
    path: 'tabs/utenti/infoutente/:id',
    loadChildren: () => import('./infoutente/infoutente.module').then( m => m.infoutentePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class utentiPageRoutingModule {}
