import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.sass']
})
export class CartSummaryComponent implements OnInit {
  prodPcs = 15;
  total= 589.45;
  shipping=24.90;
  payable= this.total+this.shipping;
  constructor() { }

  ngOnInit(): void {
  }

}
