import { Component, OnInit } from '@angular/core';
import { FamilyDataService } from '../../services/family-data.service';
import { Reflection } from '../../models/reflection.model';

@Component({
    selector: 'app-reflections-page',
    templateUrl: './reflections-page.component.html',
    standalone: false
})
export class ReflectionsPageComponent implements OnInit {
  reflections: Reflection[] = [];
  selectedReflection: Reflection | null = null;
  heroImage = 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  
  constructor(private familyDataService: FamilyDataService) {}
  
  ngOnInit() {
    this.familyDataService.getAllReflections().subscribe(reflections => {
      this.reflections = reflections;
      
      // Select the first reflection by default
      if (reflections.length > 0) {
        this.selectedReflection = reflections[0];
      }
    });
  }
  
  selectReflection(reflection: Reflection) {
    this.selectedReflection = reflection;
    
    // Scroll to content on mobile
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const contentElement = document.getElementById('reflection-content');
        if (contentElement) {
          contentElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
  
  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    });
  }
}