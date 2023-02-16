import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: 
  [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule, 
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ]
})
export class CartModule { }
