import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';


@NgModule({
  declarations: [
    BillComponent
  ],
  imports: [
    CommonModule,
    BillRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class BillModule { }
