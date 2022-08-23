import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shop/shopping-cart/shopping-cart.component';
import { RegisterComponent } from './starter/register/register.component';
import { StarterGuard } from './starter/starter.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./starter/starter.module').then((m) => m.StarterModule),
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
    canActivate: [StarterGuard],

  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
    canActivate: [StarterGuard],

  },
  {
    path: 'product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
