import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(){}

  isLogin:boolean = false;

  CartItemCount:number =0;

  categories : Array<any>=[
    {
      Id:1,
      Name:"Food",
      SubCategory_Id:[1,4] ,
    },
    {
      Id:1,
      Name:"Clothes",
      SubCategory_Id:[2,3] ,
    }
  ]



}
