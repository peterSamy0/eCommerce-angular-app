import { Component } from '@angular/core';
import { CounterService } from './../service/counter.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartVal : number = 0;
  constructor ( private CounterService: CounterService) {}

  ngOnInit(){
    this.CounterService.getCounterVal().subscribe( val => this.cartVal = val);
  }
}
