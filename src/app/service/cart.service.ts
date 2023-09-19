import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedItems: any[] = [];

  constructor() { }

  addItem(item: any) {
    this.selectedItems.push(item);
  }

  getSelectedItems() {
    return this.selectedItems;
  }

  clearItems() {
    this.selectedItems = [];
  }
}
