import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  productOfCart: any;
  selectedItems!: any[];
  count!: number;
  constructor(private cartService: CartService, private counter: CounterService) { }

  ngOnInit() {
    this.selectedItems = this.cartService.getSelectedItems();
    this.counter.getCounterVal().subscribe(val => this.count = val)
    console.log(this.selectedItems)
  }
  removeItem(item: any){
    this.selectedItems = this.selectedItems.filter( val => val != item);
    this.deCreaseItem()
  }

  inCreaseItem(item: any){
    if(this.count < item.stock){
      this.counter.setCartValue(++this.count)
    }
  }

  deCreaseItem(){
    if(this.count > 0){
      this.counter.setCartValue(--this.count)
     }
  }
}


