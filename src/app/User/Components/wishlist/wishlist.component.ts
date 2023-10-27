import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor() { }

  wishlistItems:Array<any>=[
    {
      id:1,
      title: "Round Buckle 1 Belt",
      ImgUrl: "assets/img/9.webp",
      sale_price: 17.65,
      price: 18.99
    },
    {
      id:2,
      title: "Round Buckle 1 Belt",
      ImgUrl: "assets/img/9.webp",
      sale_price: 17.65,
      price: 18.99
    },
    {
      id:3,
      title: "Round Buckle 1 Belt",
      ImgUrl: "assets/img/9.webp",
      sale_price: 17.65,
      price: 18.99
    },
    {
      id:4,
      title: "Round Buckle 1 Belt",
      ImgUrl: "assets/img/9.webp",
      sale_price: 17.65,
      price: 18.99
    }
  ]
  ngOnInit() {
  }

}
