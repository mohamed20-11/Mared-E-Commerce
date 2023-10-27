import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vendor-product-details',
  templateUrl: './vendor-product-details.component.html',
  styleUrls: ['./vendor-product-details.component.css']
})
export class VendorProductDetailsComponent {
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
