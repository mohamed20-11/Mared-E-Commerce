import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popular_sales: Array<any>;
  Offers : Array<any>;

  constructor() {

    this.popular_sales = [
      {
        title: "Round Buckle 1 Belt",
        ImgUrl: "assets/img/9.webp",
        sale_price: 17.65,
        price: 18.99
      },
      {
        title: "Round Buckle 1 Belt",
        ImgUrl: "assets/img/9.webp",
        sale_price: 17.65,
        price: 18.99
      },
      {
        title: "Round Buckle 1 Belt",
        ImgUrl: "assets/img/9.webp",
        sale_price: 17.65,
        price: 18.99
      },
      {
        title: "Round Buckle 1 Belt",
        ImgUrl: "assets/img/9.webp",
        sale_price: 17.65,
        price: 18.99
      }
    ]

    this.Offers=[
      {
       title:"Round Buckle 1 Belt",
       MainImage:"./assets/img/product-image-12-346x310.jpg" ,
       Img1Uel:"./assets/img/product-image-50-346x310.jpg" ,
       Img2Uel:"./assets/img/product-image-51-346x310.jpg" ,
       Img3Uel:"./assets/img/product-image-46-346x310.jpg" ,
       Price:52,
       salePrice: 48,
       Rating:4.9,
      },
      {
        title:"Round Buckle 1 Belt",
        MainImage:"./assets/img/4.webp" ,
        Img1Uel:"./assets/img/5.webp" ,
        Img2Uel:"./assets/img/6.webp" ,
        Img3Uel:"./assets/img/8.webp" ,
        Price:250,
        salePrice: 188,
        Rating:3.5,
       },
       {
        title:"Round Buckle 1 Belt",
        MainImage:"./assets/img/9.webp" ,
        Img1Uel:"./assets/img/16.webp" ,
        Img2Uel:"./assets/img/17.webp" ,
        Img3Uel:"./assets/img/5.webp" ,
        Price:250,
        salePrice: 188,
        Rating:3.5,
       },
       {
        title:"Round Buckle 1 Belt",
        MainImage:"./assets/img/product-image-46-346x310.jpg" ,
        Img1Uel:"./assets/img/product-image-47-346x310.jpg" ,
        Img2Uel:"./assets/img/product-image-58-346x310.jpg" ,
        Img3Uel:"./assets/img/product-image-51-346x310.jpg" ,
        Price:60,
        salePrice: 52,
        Rating:4.7,
       }
   ]
  }
}
