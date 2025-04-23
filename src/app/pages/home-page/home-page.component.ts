import { Component } from '@angular/core';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    standalone: false
})
export class HomePageComponent {
  heroImage = 'https://images.pexels.com/photos/4496733/pexels-photo-4496733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  quote = "We come from saints, not for thrones, but for service.";
}