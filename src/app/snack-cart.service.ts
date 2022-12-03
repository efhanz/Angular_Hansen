import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Snack } from './snacks-list/snacks';

//Acá manejamos la lógica del "cart"

@Injectable({
  providedIn: 'root'
})
export class SnackCartService {

private _shoppingList: Snack[] = [];

shoppingList: BehaviorSubject<Snack[]> =new BehaviorSubject(this._shoppingList);

constructor() { }

addToCart(snack: Snack) {

  let item: Snack = this._shoppingList.find((v1) => v1.product == snack.product)!;
  if(!item) {
    this._shoppingList.push({... snack});
  } else {
    item.quantity += snack.quantity;
  }

  console.log(this.shoppingList);
  this.shoppingList.next(this._shoppingList);


}


}
