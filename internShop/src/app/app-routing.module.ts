import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  },
  {
    path: "shop", component: ShopComponent,
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: '**',
    component: ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
