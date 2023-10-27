import { Component, Input } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product?: any ;

  addCertCount(){

    
  }
  
}
