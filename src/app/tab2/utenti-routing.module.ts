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
  },
  {
    path: 'nuovoutente',
    loadChildren: () => import('./nuovoutente/nuovoutente.module').then( m => m.NuovoutentePageModule)
  },
  {
    path: 'modificautente',
    loadChildren: () => import('./modificautente/modificautente.module').then( m => m.ModificautentePageModule)
  },
  {
    path: 'tabs/utenti/modificautente/:id',
    loadChildren: () => import('./modificautente/modificautente.module').then( m => m.ModificautentePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class utentiPageRoutingModule {}
