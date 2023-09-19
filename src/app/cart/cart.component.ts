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
  total: number = 0;
  constructor(private cartService: CartService, private counter: CounterService) { }

  ngOnInit() {
    this.selectedItems = this.cartService.getSelectedItems();
    this.counter.getCounterVal().subscribe(val => this.count = val)
    this.totalPice()
    console.log(this.selectedItems)
  }
  removeItem(item: any){
    this.selectedItems = this.selectedItems.filter( val => val != item);
    this.deCreaseItem(item)
  }

  inCreaseItem(item: any){
    if(item.quantity < item.stock){
      item.quantity++
      this.counter.setCartValue(++this.count)
      this.totalPice()
    }
  }

  deCreaseItem(item: any){
    if(item.quantity > 1){
      item.quantity--
      this.counter.setCartValue(--this.count)
      this.totalPice()
     }
  }

  totalPice(){
    this.total = 0;
    for(let ind in this.selectedItems){
      this.total += this.selectedItems[ind].quantity * this.selectedItems[ind].price
      console.log(this.total)
    }
  }
}


