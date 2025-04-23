import { Component, Input, OnInit } from '@angular/core';
import { TimelineEvent } from '../../models/timeline-event.model';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    standalone: false
})
export class TimelineComponent implements OnInit {
  @Input() events: TimelineEvent[] = [];
  @Input() showFilters: boolean = true;
  
  filteredEvents: TimelineEvent[] = [];
  activeCategory: string = 'all';
  categories = [
    { id: 'all', name: 'All Events' },
    { id: 'spiritual', name: 'Spiritual' },
    { id: 'political', name: 'Political' },
    { id: 'social', name: 'Social' },
    { id: 'property', name: 'Property' },
    { id: 'other', name: 'Other' }
  ];
  
  ngOnInit() {
    this.filterEvents('all');
  }
  
  filterEvents(category: string) {
    this.activeCategory = category;
    
    if (category === 'all') {
      this.filteredEvents = [...this.events].sort((a, b) => a.year - b.year);
    } else {
      this.filteredEvents = this.events
        .filter(event => event.category === category)
        .sort((a, b) => a.year - b.year);
    }
  }
  
  getCategoryClass(category: string): string {
    switch(category) {
      case 'spiritual':
        return 'bg-blue-100 text-blue-800';
      case 'political':
        return 'bg-red-100 text-red-800';
      case 'social':
        return 'bg-green-100 text-green-800';
      case 'property':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
}