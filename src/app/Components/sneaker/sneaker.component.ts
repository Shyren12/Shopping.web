import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-sneaker',
  templateUrl: './sneaker.component.html',
  styleUrls: ['./sneaker.component.scss']
})
export class SneakerComponent 
{
  title = 'shopping';
  @Input() item:any
}
