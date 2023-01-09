import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'infogroup',
    loadChildren: () => import('./infogroup/infogroup.module').then( m => m.InfogroupPageModule)
  },
  {
    path: 'tabs/tab1/infogroup/:id',
    loadChildren: () => import('./infogroup/infogroup.module').then( m => m.InfogroupPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
