import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { SnackCartService } from '../snack-cart.service';
import { Snack } from '../snacks-list/snacks';

@Component({
  selector: 'app-snacks-shopping-cart',
  templateUrl: './snacks-shopping-cart.component.html',
  styleUrls: ['./snacks-shopping-cart.component.scss']
})
export class SnacksShoppingCartComponent implements OnInit {


     shoppingList!: Snack[];

     constructor(private cart: SnackCartService) {

       cart.shoppingList.subscribe(c => this.shoppingList = c);
     }

     ngOnInit(): void {
     }

}
