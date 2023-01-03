import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { map, fromEvent, interval, Observable, delay, distinctUntilChanged, startWith } from 'rxjs';

@Component({
  selector: 'app-stockticker',
  templateUrl: './stockticker.component.html',
  styleUrls: ['./stockticker.component.sass']
})
export class StocktickerComponent {

  number$: Observable<Number>;
  search$: Observable<String>;

  @ViewChild('searchInput') input: ElementRef;

  ngOnInit() {

    this.number$ = interval(3000);


  }

  ngAfterViewInit() {

    this.search$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        map((event: any) => event.target.value.toLowerCase()),
        delay(500),
        distinctUntilChanged(),
        startWith('')
      );

  }

}
