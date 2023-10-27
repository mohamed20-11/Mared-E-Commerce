import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-product-list',
  templateUrl: './vendor-product-list.component.html',
  styleUrls: ['./vendor-product-list.component.css']
})
export class VendorProductListComponent {

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
  Products :Array<any>=[
     {
      Id : 1,
      SubCategory_Id: 1,
      Draft:false,
      title:"A4TECH BH300 Bluetooth Wireless Headset",
      ImgUrl:"./assets/img/product-image-12-346x310.jpg" ,
      SKU: "CSJ0158" ,
      Stock:12,
      Price:52,
      Rating:4.9,
      Published:"12/24/2023 01:05 PM",
      isdeleted  : false
     },
     {
      Id : 2,
      SubCategory_Id: 1,
      Draft:false,
      title:"A4TECH BH300 Bluetooth Wireless Headset",
      ImgUrl:"./assets/img/product-image-51-346x310.jpg" ,
      SKU: "CSJ0158" ,
      Stock:12,
      Price:52,
      Rating:4,
      Published:"12/24/2023 01:05 PM",
      isdeleted  : false
     },
     {
      Id : 3,
      SubCategory_Id: 2,
      Draft:false,
      title:"A4TECH BH300 Bluetooth Wireless Headset",
      ImgUrl:"./assets/img/product-image-47-346x310.jpg" ,
      SKU: "CSJ0158" ,
      Stock:12,
      Price:52,
      Rating:3.8,
      Published:"12/24/2023 01:05 PM",
      isdeleted  : false
     },
     {
      Id : 4,
      SubCategory_Id: 3,
      Draft:false,
      title:"A4TECH BH300 Bluetooth Wireless Headset",
      ImgUrl:"./assets/img/product-image-58-346x310.jpg" ,
      SKU: "CSJ0158" ,
      Stock:12,
      Price:52,
      Rating:4.2,
      Published:"12/24/2023 01:05 PM",
      isdeleted  : false
     },
     {
      Id : 5,
      SubCategory_Id: 4,
      Draft:false,
      title:"A4TECH BH300 Bluetooth Wireless Headset",
      ImgUrl:"./assets/img/product-image-50-346x310.jpg" ,
      SKU: "CSJ0158" ,
      Stock:12,
      Price:52,
      Rating:3.1,
      Published:"12/24/2023 01:05 PM",
      isdeleted  : false
     }

  ]

  trashProduct(id:number){
    
    this.Products.forEach(element => {
      console.log("id",id);
      if(element.id == id)
      {
        console.log(element.id);

        element.isdeleted = true;

        this.Products = this.Products.filter(p =>p.isdeleted == false);
      }
    });
  
  }
}
