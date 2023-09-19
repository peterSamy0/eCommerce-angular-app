import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;
  count: number = 0;
  selectedItem: any;
  constructor(private router: Router , private cartService: CartService, private counter: CounterService) {}

  redirectToDetails(id: Number) {
    this.router.navigate(['productDetails', id]);
  }
  ngOnInit() {
    this.counter
      .getCounterVal()
      .subscribe((val) => (this.count = val));

    this.selectedItem = this.cartService.getSelectedItems();
  }

  addToCart(item: any) {
    if(this.count < item.stock){
      this.counter.setCartValue(++this.count)
      console.log(this.selectedItem)
      this.cartService.addItem(item)
    }
  }
}