import { Component } from '@angular/core';
import { productService } from '../service/api-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any;

  constructor(private productService: productService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe(
      (data: any) => (this.products = data['products']),
      (error) => console.log(error),
      () => console.log("COMPLETE")
    )
  }
 
}