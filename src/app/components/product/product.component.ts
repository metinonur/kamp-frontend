import { Component, OnInit } from '@angular/core';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Product } from 'src/app/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Product[] = [];
  //productResponseModel:ProductResponseModel=();

  constructor() { }

  ngOnInit(): void {
    console.log("Init çalıştı")
  }

}
