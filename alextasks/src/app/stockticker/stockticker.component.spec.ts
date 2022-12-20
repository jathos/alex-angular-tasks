import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocktickerComponent } from './stockticker.component';

describe('StocktickerComponent', () => {
  let component: StocktickerComponent;
  let fixture: ComponentFixture<StocktickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocktickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StocktickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
