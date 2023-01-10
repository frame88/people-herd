import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'usermod',
    loadChildren: () => import('./usermod/usermod.module').then( m => m.UsermodPageModule)
  },
  {
    path: 'tabs/tab2/usermod/:id',
    loadChildren: () => import('./usermod/usermod.module').then( m => m.UsermodPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
