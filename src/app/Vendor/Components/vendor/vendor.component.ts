import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent {
  isCollapse: boolean = false;
  collapse() {
    console.log('colapse');
    if (!this.isCollapse) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }

  }
}
