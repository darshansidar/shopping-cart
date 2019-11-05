import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {ProductService} from '../../shared/product.service';
import { Router } from '@angular/router';

export class Item {
  constructor(
    public id: number,
    public name: string,
    public price: number
  ) {  }
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  cartItem:any;
  model = new Item(0, 'Pen',33.4);
  submitted = false;
  constructor(private router: Router,private productService: ProductService) { }
  selectedProdList = [];
  results = [];
  ngOnInit() {
  this.productService.currentMessage.subscribe(cartItem => this.cartItem = cartItem)
  this.selectedProdList = this.cartItem;
  }
  goBack(){
    this.router.navigate(['']);
    this.productService.changeMessage(this.cartItem);
  }

  deleteItem(item){
  for(var i =0;i<this.selectedProdList.length;i++){
  if(i==item){
    this.selectedProdList.splice(this.selectedProdList[i], 1);
      }
     }
   }

  onSubmit(model) {
    this.submitted = true;
    for(var i =0;i<this.selectedProdList.length;i++){
      if(this.selectedProdList[i].id== model.id){
        this.selectedProdList[i].name = model.name;
        this.selectedProdList[i].price = model.price;
      }
      }
  }

  newItem(model) {
    model.img = "https://5.imimg.com/data5/TC/RV/MY-5434154/black-color-pen-500x500.jpg";
    model.price = 33.3;
    this.model = new Item(model.id, model.name,model.price);
    this.selectedProdList.push(model);
  }
  setItem(item){
    this.model = new Item(item.id,item.name,item.price)
  }

}
