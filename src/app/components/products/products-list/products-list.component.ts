import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../../../services/products/products-service.service';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent implements OnInit{
  constructor(private productService: ProductsServiceService) {}

  productList: Product[] = [];

  async getProducts() {
    try {
      this.productService.getProducst().
      subscribe(item => this.productList = item);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
