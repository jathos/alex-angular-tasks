import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageboardComponent } from './messageboard.component';

describe('MessageboardComponent', () => {
  let component: MessageboardComponent;
  let fixture: ComponentFixture<MessageboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
