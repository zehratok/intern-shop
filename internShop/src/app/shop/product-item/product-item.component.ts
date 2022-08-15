import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private router: RouterModule, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addCart(): void {
    const dialog = this.dialog.open(CartModalComponent, {
      width: '300px',
      panelClass: 'cartDialog',
    });
  }
}
