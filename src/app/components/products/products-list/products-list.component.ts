import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsServiceService } from '../../../services/products/products-service.service';
import { Product } from '../../../models/Product';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {

  constructor(private productService: ProductsServiceService) { }

  productList: Product[] = [];
  displayedColumns: string[] = ['id', 'name', 'code', 'category'];
  dataSource = new MatTableDataSource<Product>(this.productList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducst().subscribe(
      (products: Product[]) => {
        this.productList = products;
        this.dataSource.data = this.productList;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
