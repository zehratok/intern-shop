import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    CartModalComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class ShopModule { }
