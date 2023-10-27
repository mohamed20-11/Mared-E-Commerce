import { Component, OnInit } from '@angular/core';
import { OrderListServiceService } from '../../vendor/order-list-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  OrderLists: any[];
  OrderStatus: string = '';

  constructor(private OrderListserv: OrderListServiceService,
              private  router :Router ) {
    this.OrderLists = this.OrderListserv.OrderList;
  }

  Status() {
    this.OrderLists = this.OrderListserv.FilterStatus(this.OrderStatus);
  }
  Details(OrderId:number){
    this.router.navigate(['vendor/orderlist',OrderId])

  }


  ngOnInit(): void {
    // Implementation for ngOnInit
  }
}