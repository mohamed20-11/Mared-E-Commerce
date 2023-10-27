import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent {
OfferList:any[];
constructor(){
  this.OfferList=[
    {Id:1,Name:"Milk",OldPrice:30,NewPrice:20,Quantity:2},
    {Id:2,Name:"Oil",OldPrice:30,NewPrice:20,Quantity:7},
    {Id:3,Name:"Suger",OldPrice:30,NewPrice:20,Quantity:5}
  ]
}
}
