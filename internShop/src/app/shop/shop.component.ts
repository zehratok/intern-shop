import { Component, Input, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit {
  @Input() product!: Product;
  constructor(
    public showToolBar: AppModule,
    public productService:ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts();
  }

}
