import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../shared/product.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';


@Pipe({name: 'startsWith'})

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  query: string = '';
  productList  = [];
  itemAdded = [];
  cartItem:any;
  constructor(private router:Router,private productService: ProductService) { }

  addToCart(id){
    this.itemAdded.push(id);
    }
  ngOnInit() {
    this.productList = this.productService.getProducts()
      console.log(this.productList);
    this.productService.currentMessage.subscribe(cartItem => this.cartItem = cartItem)
    console.log("product-list====",typeof(this.cartItem));
    var arr;
    if(this.cartItem){
      // var str = this.cartItem.splice(this.cartItem.indexOf(''), 1);
      if(this.cartItem === ''){
        var array = this.cartItem.split(" ");
          arr = array.filter(e => e !== '');
      }else{
         arr = this.cartItem.filter(e => e !== '');
      }
      this.itemAdded = arr;
    }
  }
  newMessage() {
    this.productService.changeMessage(this.itemAdded);
    this.router.navigate(['/product-details']);
  }

}
