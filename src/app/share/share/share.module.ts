import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { TaskbarComponent } from '../../Components/taskbar/taskbar.component';
import { ShirtComponent } from '../../Components/shirt/shirt.component';
import { SneakerComponent } from '../../Components/sneaker/sneaker.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: 
  [
    TaskbarComponent,
    ShirtComponent,
    SneakerComponent
  ],
  imports: 
  [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ],

  exports:
  [
    TaskbarComponent,
    ShirtComponent,
    SneakerComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class ShareModule { }
