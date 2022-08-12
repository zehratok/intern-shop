import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CartModalComponent } from '../cart-modal/cart-modal.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass']
})
export class ProductItemComponent implements OnInit {

  constructor(
    private router: RouterModule,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  addCart(): void {
    const dialog = this.dialog.open(CartModalComponent, {
      width: '300px',
      panelClass: 'cartDialog'
    });

  }

}
