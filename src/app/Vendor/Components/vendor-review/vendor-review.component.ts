import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-review',
  templateUrl: './vendor-review.component.html',
  styleUrls: ['./vendor-review.component.css']
})
export class VendorReviewComponent {
//   VProducts :Array<any>=[
//     {
//      Id : 1,
//      title:"A4TECH BH300 Bluetooth Wireless Headset",
//      ImgUrl:"./assets/img/product-image-12-346x310.jpg" ,
//      Rating:4.9,

//     },
//     {
//      Id : 2,
//      title:"A4TECH BH300 Bluetooth Wireless Headset",
//      ImgUrl:"./assets/img/product-image-51-346x310.jpg" ,
//      Rating:4,
//     },
//     {
//      Id : 3,
//      title:"A4TECH BH300 Bluetooth Wireless Headset",
//      ImgUrl:"./assets/img/product-image-47-346x310.jpg" ,
//      Rating:3.8,
//     },
//     {
//      Id : 4,
//      title:"A4TECH BH300 Bluetooth Wireless Headset",
//      ImgUrl:"./assets/img/product-image-58-346x310.jpg" ,
//      Rating:4.2,
//     },
//     {
//      Id : 5,
//      title:"A4TECH BH300 Bluetooth Wireless Headset",
//      ImgUrl:"./assets/img/product-image-50-346x310.jpg" ,
//      Rating:3.1,

//     }

//  ];
products = [
  { name: 'Product 1', price: 100 },
  { name: 'Product 2', price: 200 },
  { name: 'Product 3', price: 300 },
];

}
