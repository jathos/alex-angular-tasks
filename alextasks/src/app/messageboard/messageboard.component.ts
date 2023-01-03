import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messageboard',
  templateUrl: './messageboard.component.html',
  styleUrls: ['./messageboard.component.sass']
})
export class MessageboardComponent {

  @Input() messages: string[];

}
