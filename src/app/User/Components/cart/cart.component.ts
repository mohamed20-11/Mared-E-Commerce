import { Component } from '@angular/core';
import { ChartService } from 'angular-highcharts/lib/chart.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  CartList:any[];
  constructor(private Cartserv:CartService){
    this.CartList=this.Cartserv.cart;
  }

}
