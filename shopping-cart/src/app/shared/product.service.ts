import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ItemColor = 'blue' | 'green' | 'gray';
export interface Product {
  id?: number;
  name?: string;
  price?: number;
  colors?: ItemColor[];
  img?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  changeMessage(cartItem: any) {
    this.messageSource.next(cartItem)
  }

  constructor() { }
 // get the product list
  public getProducts(): Product[] {
    return this.products();
  }

  private products(): Product[] {
    return <Product[]>[
      <Product>{id: 1,colors: ['blue'], name: 'Blue pen', price: 123.09,img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 2,colors: ['green'], name: 'Green pen', price: 99.09,img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 3,colors: ['gray'], name: 'Green pen', price: 99.09, img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 4,colors: ['green'], name: 'Gray pen', price: 99.09, img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 5,colors: ['green'], name: 'Green and blue', price: 99.09,img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 6,colors: ['green'], name: 'Green and blue pen', price: 99.09, img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 7,colors: ['green'], name: 'Gray pen', price: 99.09, img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 8,colors: ['green'], name: 'Blue pen', price: 99.09, img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
      <Product>{id: 9,colors: ['green'], name: 'All colors pen', price: 99.09,img:"https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg"},
    ];
  }
}
