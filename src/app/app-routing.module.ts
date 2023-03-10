import { infogruppoPage } from './gruppi/infogruppo/infogruppo.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs/gruppi/:id',
    loadChildren: () => import('./gruppi/infogruppo/infogruppo.module').then( m => m.infogruppoPageModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then( m => m.LoginPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
