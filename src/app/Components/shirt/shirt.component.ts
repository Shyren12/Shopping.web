import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.scss']
})
export class ShirtComponent 
{
  title = 'shopping';
  @Input() item:any

  @Output()  dataShirtChange = new EventEmitter();
  like(item: any) {
    this.dataShirtChange.emit(item)
  } 
}
