import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
providedIn:  'root'
})

export class productService {

private url = 'https://dummyjson.com/products';

constructor(private http: HttpClient) { }

getProductList() {
	return this.http.get(this.url, {
		headers: {
		  'Accept-language': 'en',
		},
		params: {
		  name: 'troy',
		},
	  })
}
getProductDetails(id : string) {
    return this.http.get(`${this.url}/${id}`);
  }
}