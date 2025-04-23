import { Component, OnInit } from '@angular/core';
import { FamilyDataService } from '../../services/family-data.service';
import { Person } from '../../models/person.model';

@Component({
    selector: 'app-notable-figures-page',
    templateUrl: './notable-figures-page.component.html',
    standalone: false
})
export class NotableFiguresPageComponent implements OnInit {
  notablePeople: Person[] = [];
  selectedPerson: Person | null = null;
  isModalOpen = false;
  heroImage = 'https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  
  constructor(private familyDataService: FamilyDataService) {}
  
  ngOnInit() {
    this.familyDataService.getNotablePeople().subscribe(people => {
      this.notablePeople = people;
    });
  }
  
  viewPersonDetails(id: string) {
    this.familyDataService.getPersonById(id).subscribe(person => {
      if (person) {
        this.selectedPerson = person;
        this.isModalOpen = true;
      }
    });
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}