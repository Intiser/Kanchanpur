import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    template: `
    <div class="min-h-screen flex flex-col">
      <app-header></app-header>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
    standalone: false
})
export class AppComponent {
  title = 'The House of Syed Shah Miran';
}