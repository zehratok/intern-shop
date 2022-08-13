import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.sass']
})
export class ProductSummaryComponent implements OnInit {

  count = 1;
  unitPrice = 7.699;
  amount = this.unitPrice;
  constructor() { }

  ngOnInit(): void {
  }

  trash(): void {

  }

  increment() {
    if (this.count < 10) {
      this.count += 1;
    }
    this.amount = this.count * this.unitPrice
  };

  decrement() {
    if (this.count > 1) {
      this.count -= 1;
    }
    this.amount = this.count * this.unitPrice
  };

}
