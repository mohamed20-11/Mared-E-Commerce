import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.css']
})
export class OfferCardComponent implements OnInit {

  @Input() myOffer?: any;
  // :any=
  //   {
  //    title:"Round Buckle 1 Belt",
  //    MainImage:"./assets/img/product-image-12-346x310.jpg" ,
  //    Img1Uel:"./assets/img/product-image-50-346x310.jpg" ,
  //    Img2Uel:"./assets/img/product-image-51-346x310.jpg" ,
  //    Img3Uel:"./assets/img/product-image-46-346x310.jpg" ,
  //    Price:52,
  //    salePrice: 48,
  //    Rating:4.9,
  //   }
  constructor() { }


  ngOnInit() {
  }

}
