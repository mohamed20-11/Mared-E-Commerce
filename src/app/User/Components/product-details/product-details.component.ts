import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  isReview: boolean = true;
  isSellarInfo: boolean = false;
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
