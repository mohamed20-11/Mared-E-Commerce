import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  id=0;
  constructor(private activate:ActivatedRoute){
    this.activate.params.subscribe(prams=>{
      if(prams['id'] == ''|| prams['id']== undefined)
        this.id = 0
      else
        this.id = parseInt(prams['id'])
      //app to get one product
    })

  }
  product: any={

     id :0,
     ImgUrl:"" ,
     Title: "" ,
     price:55,
  };

}
