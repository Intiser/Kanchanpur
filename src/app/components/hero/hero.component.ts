import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    standalone: false
})
export class HeroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() backgroundImage: string = '';
  @Input() showButtons: boolean = false;
}