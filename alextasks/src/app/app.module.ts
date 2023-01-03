import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StocktickerComponent } from './stockticker/stockticker.component';
import { MessageboardComponent } from './messageboard/messageboard.component';

@NgModule({
  declarations: [
    AppComponent,
    StocktickerComponent,
    MessageboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
