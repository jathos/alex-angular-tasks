import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-stockticker',
  templateUrl: './stockticker.component.html',
  styleUrls: ['./stockticker.component.sass']
})
export class StocktickerComponent {

  number$: Observable<any>;

  ngOnInit() {

    this.number$ = interval(3000);

  }

}
