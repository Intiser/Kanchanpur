import { Component, OnInit } from '@angular/core';
import { FamilyDataService } from '../../services/family-data.service';
import { TimelineEvent } from '../../models/timeline-event.model';

@Component({
    selector: 'app-timeline-page',
    templateUrl: './timeline-page.component.html',
    standalone: false
})
export class TimelinePageComponent implements OnInit {
  timelineEvents: TimelineEvent[] = [];
  heroImage = 'https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-159862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
  
  constructor(private familyDataService: FamilyDataService) {}
  
  ngOnInit() {
    this.familyDataService.getAllTimelineEvents().subscribe(events => {
      this.timelineEvents = events;
    });
  }
}