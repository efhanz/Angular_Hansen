import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnacksListComponent } from './snacks-list/snacks-list.component';
import { SnacksShoppingCartComponent } from './snacks-shopping-cart/snacks-shopping-cart.component';
import { SnacksAboutComponent } from './snacks-about/snacks-about.component';
import { SnacksHomeComponent } from './snacks-home/snacks-home.component';
import { InputNumericComponent } from './input-numeric/input-numeric.component';

@NgModule({
  declarations: [
    AppComponent,
    SnacksListComponent,
    SnacksShoppingCartComponent,
    SnacksAboutComponent,
    SnacksHomeComponent,
    InputNumericComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
