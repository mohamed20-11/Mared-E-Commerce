import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { OrderListServiceService } from '../../vendor/order-list-service.service';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  RecOrderId:number = 0;
  OrderDetails:any[];
  constructor(private ActivRout :ActivatedRoute, 
              private OrderListServ :OrderListServiceService){this.OrderDetails=this.OrderListServ.OrderList}

  ngOnInit(): void {
this.RecOrderId=Number(this.ActivRout.snapshot.paramMap.get('id'))
this.OrderDetails = this.OrderListServ.GetOrderById(this.RecOrderId)
console.log(this.OrderDetails)
  }

}
