import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'gruppi',
        loadChildren: () => import('../gruppi/gruppi.module').then(m => m.gruppiPageModule)
      },
      {
        path: 'utenti',
        loadChildren: () => import('../tab2/utenti.module').then(m => m.utentiPageModule)
      },
      {
        path: 'ruoli',
        loadChildren: () => import('../ruoli/ruoli.module').then(m => m.ruoliPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/gruppi',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/gruppi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
