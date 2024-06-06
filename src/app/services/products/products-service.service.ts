import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor(private http: HttpClient) { }

  //Conexion con la API de backend
  URL = "http://localhost:3000/api/product";

  getProducst():Observable<Product[]> {
    return this.http.get<Product[]>(this.URL)
  }

  createProduct(product: Product):Observable<Product> {
    return this.http.post<Product>(this.URL, {product})
  }

  deleteProduct(id: string):Observable<Product> {
    return this.http.delete<Product>(this.URL+"/"+id)
  }

}
