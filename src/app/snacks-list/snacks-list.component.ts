import { Component, OnInit } from '@angular/core';
import { SnackCartService } from '../snack-cart.service';
import { Snack } from './snacks';

@Component({
  selector: 'app-snacks-list',
  templateUrl: './snacks-list.component.html',
  styleUrls: ['./snacks-list.component.scss']

})
export class SnacksListComponent implements OnInit {

snacks : Snack[] = [
   {
  "product" : "Avellanas",
  "origin" : "Brasil",
  "oldprice" : 980,
  "price" : 980,
  "stock" : 20,
  "image" : "https://github.com/efhanz/Images-Angular/blob/main/avellanas.jpg?raw=true",
  "clearance" : false,
  "quantity" : 0,
},
{
  "product" : "Avellanas",
  "origin" : "India",
  "oldprice" : 1300,
  "price" : 1100,
  "stock" : 30,
  "image" : "https://github.com/efhanz/Images-Angular/blob/main/avellanas.jpg?raw=true",
  "clearance" : true,
  "quantity" : 0,
},
{
  "product" : "Nueces",
  "origin" : "Argentina",
  "oldprice" : 2500,
  "price" : 2500,
  "stock" : 0,
  "image" : "https://github.com/efhanz/Images-Angular/blob/main/nueces.jpg?raw=true",
  "clearance" : false,
  "quantity" : 0,
},
];


constructor(private cart: SnackCartService) {

 }

ngOnInit() : void {

};

addToCart(snack: Snack): void {

  this.cart.addToCart(snack);
  snack.stock -= snack.quantity;
  snack.quantity = 0;
}

maxReached(m: string) {
  alert(m);
}

upQuantity(snack: Snack): void {
  if(snack.stock)
  if  ( snack.quantity < snack.stock)
  snack.quantity++;
}
downQuantity(snack: Snack): void {
  if(snack.quantity > 0)
  snack.quantity--;
}

}
