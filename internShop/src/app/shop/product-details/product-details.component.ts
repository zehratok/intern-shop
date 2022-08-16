import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;
  id!: number;
  private sub: any;
  constructor(
    public productService: ProductService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.showDetails();
  }

  showDetails(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.productService.getProductId(this.id).subscribe((res: Product) => {
      this.product = res;
      console.log(this.product);
    });
    console.log(this.id);
  }

  addCart(): void {
    const dialog = this.dialog.open(CartModalComponent, {
      width: '300px',
      panelClass: 'cartDialog',
    });
  }
}
