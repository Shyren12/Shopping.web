import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'Cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) }, { path: 'Bill', loadChildren: () => import('./pages/bill/bill.module').then(m => m.BillModule) }, { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
