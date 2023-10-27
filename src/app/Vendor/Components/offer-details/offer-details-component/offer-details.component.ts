import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-details-component',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent  {
  
  isReview: boolean = true;
  isSellarInfo: boolean = false;

  Offers: Array<any>=[
    {
     Id:1,
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
      Id:2,
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
      Id:3,
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
      Id:4,
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

  myOffer:any={
    id:1,
    title:"MCCORMICK® BASIL LEAVES",
    oldPrice:120,
    newPrice:100,
    description:"McCormick Basil Leaves have an aromatic, sweet flavor that blends well with garlic and tomatoes.This pantry staple is essential in so many of your family’s favorite recipes, including pizza,pasta, marinara sauce and minestrone.",
    categoryId:2,
    Quentity:12,
    starDate:"12/24/2022 01:05 PM ",
    endDate:"12/24/2023 00:05 AM ",
    featureImage:"./assets/img/product-image-12-346x310.jpg",
    ImagUrl1:"./assets/img/product-image-46-346x310.jpg",
    ImagUrl2:"./assets/img/product-image-47-346x310.jpg",
    ImagUrl3:"./assets/img/product-image-51-346x310.jpg",


  }
 // @ViewChild('botmBrdr') botmBrdr?: ElementRef<any>;
  getReview() {
    this.isReview = this.isReview == false ? true : false;
    this.isSellarInfo = false;
  }
  getSellarInfo() {
    this.isSellarInfo = this.isSellarInfo == false ? true : true;
    this.isReview = false;
  }
 
}
