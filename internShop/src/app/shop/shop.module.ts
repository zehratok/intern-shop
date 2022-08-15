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
import { ProductSummaryComponent } from './shopping-cart/product-summary/product-summary.component';
import { CartSummaryComponent } from './shopping-cart/cart-summary/cart-summary.component';
import {MatDividerModule} from '@angular/material/divider';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    CartModalComponent,
    ProductSummaryComponent,
    CartSummaryComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule
  ]
})
export class ShopModule { }
