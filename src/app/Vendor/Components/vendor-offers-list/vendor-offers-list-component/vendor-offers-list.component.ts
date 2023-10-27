import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-offers-list-component',
  templateUrl: './vendor-offers-list.component.html',
  styleUrls: ['./vendor-offers-list.component.css']
})
export class VendorOffersListComponent {

  Offers :Array<any>;

  constructor() {

    this.Offers = [
      {
       title:"Bluetooth Wireless",
       ImgUrl:"./assets/img/product-image-12-346x310.jpg" ,
       SKU: "CSJ0158" ,
       Old_Price:60,
       New_Price:52,
       Percentage:20,
       Start_Date:"12/24/2023 01:05 PM",
       End_Date :"12/24/2024 00:05 AM"
      },
      {
        title:"A4TECH BH300 ",
        ImgUrl:"./assets/img/product-image-12-346x310.jpg" ,
        SKU: "CSJ0158" ,
        Old_Price:50,
        New_Price:45,
        Percentage:20,
        Start_Date:"12/24/2023 01:05 PM",
        End_Date :"12/24/2024 00:05 AM"
      },
      {
        title:"A4TECH BH300t",
        ImgUrl:"./assets/img/product-image-12-346x310.jpg" ,
        SKU: "CSJ0158" ,
        Old_Price:60,
        New_Price:52,
        Percentage:20,
        Start_Date:"12/24/2023 01:05 PM",
        End_Date :"12/24/2024 00:05 AM"
      }
      // ,
      // {
      //   title:"A4TECH BH300t",
      //   ImgUrl:"./assets/img/product-image-16-346x310.jpg" ,
      //   SKU: "CSJ0158" ,
      //   Old_Price:60,
      //   New_Price:52,
      //   Percentage:20,
      //   Start_Date:"12/24/2023 01:05 PM",
      //   End_Date :"12/24/2024 00:05 AM"
      // },
      // {
      //   title:"A4TECH BH300t",
      //   ImgUrl:"./assets/img/product-image-17-346x310.jpg" ,
      //   SKU: "CSJ0158" ,
      //   Old_Price:90,
      //   New_Price:88.2,
      //   Percentage:35,
      //   Start_Date:"12/24/2023 01:05 PM",
      //   End_Date :"12/24/2024 00:05 AM"
      //  }
  
   ]
   }

}
