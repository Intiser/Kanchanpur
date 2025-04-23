import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
    selector: 'app-biography-modal',
    templateUrl: './biography-modal.component.html',
    standalone: false
})
export class BiographyModalComponent {
  @Input() person: Person | null = null;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  
  onClose() {
    this.closeModal.emit();
  }
}