import { Component, OnInit } from '@angular/core';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Product } from 'src/app/models/products';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  apiUrl ="https://localhost:44377/api/products/getall"
  constructor(private httpClient:HttpClient){}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    .subscribe((response) =>{
      this.products = response.data
    })
  }

}
