import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
cart:Array<any>;
  constructor() { 
    this.cart=[
      {Image:'../../../../assets/img/product-image-46-346x310.jpg',
      Id:1,Info:"fruts magni possimus iusto.",Sze:0,Price:80,Quantity:3,Total:888},
      {Image:'../../../../assets/img/product-image-46-346x310.jpg',
      Id:1,Info:"fruts magni possimus iusto.",Sze:0,Price:80,Quantity:3,Total:888},
      {Image:'../../../../assets/img/product-image-46-346x310.jpg',
      Id:1,Info:"fruts magni possimus iusto.",Sze:0,Price:80,Quantity:3,Total:888}
    ]
  }
  
  
}
