import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  selectedItems: any[] = [];

  constructor() { }
  addItem(item: any) {
    const existingItem = this.selectedItems.find((selectedItem) => selectedItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      item.quantity = 1;
      this.selectedItems.push(item);
    }
  }

  getSelectedItems() {
    return this.selectedItems;
  }

  clearItems() {
    this.selectedItems = [];
  }
}


