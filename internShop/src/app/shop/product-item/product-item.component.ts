import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.sass'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openDetails(): void {
    this.router.navigate(['/product-details']);
  }
}
