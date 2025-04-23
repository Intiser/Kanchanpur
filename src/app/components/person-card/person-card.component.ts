import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
    selector: 'app-person-card',
    templateUrl: './person-card.component.html',
    standalone: false
})
export class PersonCardComponent {
  @Input() person!: Person;
  @Output() viewDetails = new EventEmitter<string>();
  
  openDetails() {
    this.viewDetails.emit(this.person.id);
  }
  
  getLifeYears(): string {
    if (this.person.birthYear && this.person.deathYear) {
      return `(${this.person.birthYear} - ${this.person.deathYear})`;
    } else if (this.person.birthYear) {
      return `(b. ${this.person.birthYear})`;
    }
    return '';
  }
}