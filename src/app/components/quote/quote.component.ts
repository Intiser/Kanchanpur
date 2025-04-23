import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    standalone: false
})
export class QuoteComponent {
  @Input() text: string = '';
  @Input() author: string = '';
  @Input() centered: boolean = false;
}