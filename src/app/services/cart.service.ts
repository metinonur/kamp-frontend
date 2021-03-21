import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';
import { cartItems } from '../models/cartItems';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

addToCart(product:Product){
  let item =cartItems.find(c=>c.product.productId===product.productId)
  if(item){
    item.quantity+=1;
  }else{
    let cartItem= new CartItem();
    cartItem.product=product;
    cartItem.quantity=1;
    cartItems.push(cartItem)
  }
}

removeFromCart(product:Product){
  let item:CartItem =cartItems.find(c=>c.product.productId===product.productId)
  cartItems.splice(cartItems.indexOf(item),1);
}

list():CartItem[]{
  return cartItems;
}

}