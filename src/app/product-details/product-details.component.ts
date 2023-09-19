import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { productService } from '../service/api-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // products!: any
  
  public product !: any;
  
  constructor(
    private productService: productService, 
    private activeRoute: ActivatedRoute
    ) {}
  
  ngOnInit() {
    const paramsID = this.activeRoute.snapshot.params['id'];
    this.productService
      .getProductDetails(paramsID)
      .subscribe((data) => {
        this.product = data
      } );
  }
}
