import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ruoliPage } from './ruoli.page';

const routes: Routes = [
  {
    path: '',
    component: ruoliPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ruoliPageRoutingModule {}
