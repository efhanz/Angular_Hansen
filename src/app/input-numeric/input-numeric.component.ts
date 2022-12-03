import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SnacksAboutComponent } from '../snacks-about/snacks-about.component';
import { Snack } from '../snacks-list/snacks';

@Component({
  selector: 'app-input-numeric',
  templateUrl: './input-numeric.component.html',
  styleUrls: ['./input-numeric.component.scss']
})
export class InputNumericComponent {

  constructor() { }

  @Input()
quantity!: number;

@Input()
max!: number;

@Output()
quantityChange: EventEmitter<number> = new EventEmitter<number>

@Output()
maxReached: EventEmitter<string> = new EventEmitter<string>

 ngOnInit() : void {
 }

upQuantity(): void {

  if  (this.quantity < this.max)  {
  this.quantity++;
  this.quantityChange.emit(this.quantity);
}
else {

this.maxReached.emit("Max Inventory");
}}

downQuantity(): void {
  if(this.quantity > 0) {
  if  (this.quantity < this.max) {
  this.quantity--;
  this.quantityChange.emit(this.quantity);
}}}


}
