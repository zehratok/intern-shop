import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  product!: Product[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {}

  getProducts(): void {
    this.http.get<Product[]>(this.apiUrl + '/products').subscribe((res: Product[]) => {
      this.product = res;
    });
  }
}
