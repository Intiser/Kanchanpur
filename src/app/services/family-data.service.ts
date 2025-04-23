import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';
import { TimelineEvent } from '../models/timeline-event.model';
import { Reflection } from '../models/reflection.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FamilyDataService {
  private people: Person[] = [
    {
      id: 'hazrat-shah-miran',
      name: 'Hazrat Shah Miran',
      title: 'Syed Ahmad',
      birthYear: 1320,
      deathYear: 1380,
      image: 'assets/images/placeholder-person.jpg',
      shortBio: 'Founder of the family lineage in Bengal, brother of Shah Makhdum Ruposh and descendant of Hazrat Abdul Qadir Jilani.',
      fullBio: "Hazrat Shah Miran, also known as Syed Ahmad, was a spiritual figure who migrated to Bengal during the Delhi Sultanate period. As a direct descendant of Hazrat Abdul Qadir Jilani and brother to Shah Makhdum Ruposh, he established the family's presence in the region. The Sultanate granted him land that would become known as 'Lackeraz' and form the foundation of the family's legacy of service and spiritual guidance in the region.",
      isNotable: true
    },
    {
      id: 'shah-makhdum-ruposh',
      name: 'Shah Makhdum Ruposh',
      birthYear: 1315,
      deathYear: 1378,
      image: 'assets/images/placeholder-person.jpg',
      shortBio: 'Brother of Hazrat Shah Miran and an influential spiritual figure in the region.',
      fullBio: 'Shah Makhdum Ruposh was a prominent spiritual leader who, along with his brother Hazrat Shah Miran, contributed significantly to the spread of Islamic teachings in Bengal. His legacy is intertwined with his brother\'s, forming a cornerstone of the family\'s spiritual heritage.',
      isNotable: true
    },
    {
      id: 'golam-ahmed-chowdhury',
      name: 'Golam Ahmed Chowdhury',
      birthYear: 1850,
      deathYear: 1925,
      image: 'assets/images/placeholder-person.jpg',
      shortBio: "A notable zamindar who expanded the family's influence during the British colonial period.",
      fullBio: "Golam Ahmed Chowdhury was instrumental in consolidating and expanding the family\'s zamindari holdings during the British colonial period. His leadership and diplomatic acumen allowed the estate to flourish while maintaining its commitment to community service and spiritual values. Under his guidance, the estate became known for its fair treatment of tenants and commitment to local development.",
      achievements: [
        'Expanded the family\'s landholdings',
        'Established several charitable institutions',
        'Built the first modern school in the region'
      ],
      isNotable: true
    },
    {
      id: 'rashed-ahmed-chowdhury',
      name: 'Rashed Ahmed Chowdhury',
      birthYear: 1880,
      deathYear: 1945,
      image: 'assets/images/placeholder-person.jpg',
      shortBio: 'A prominent educational reformer and advocate for rural development.',
      fullBio: 'Rashed Ahmed Chowdhury dedicated his life to educational reform and rural development. Breaking from the traditional zamindari focus on land management, he established several schools and advocated for modern educational methods. His vision for community upliftment through education remains a cornerstone of the family\'s values.',
      achievements: [
        'Founded three primary schools in the region',
        'Established a scholarship fund for underprivileged students',
        'Introduced agricultural innovations to local farmers'
      ],
      isNotable: true
    },
    {
      id: 'mutaher-hossain-chowdhury',
      name: 'Mutaher Hossain Chowdhury',
      birthYear: 1910,
      deathYear: 1980,
      image: 'assets/images/placeholder-person.jpg',
      shortBio: 'A political leader who advocated for independence and later served in regional government.',
      fullBio: 'Mutaher Hossain Chowdhury was a political figure who participated in the independence movement and later served in regional government. His commitment to public service exemplified the family\'s tradition of leadership and community engagement. Despite the abolition of the zamindari system, he maintained the family\'s influence through political service and continued philanthropy.',
      achievements: [
        'Participated in the independence movement',
        'Served as a regional minister',
        'Established a community development foundation'
      ],
      isNotable: true
    },
    {
      id: 'syed-abun-nur-chowdhury',
      name: 'Syed Abun Nur Chowdhury',
      birthYear: 1940,
      image: 'assets/images/placeholder-person.jpg',
      shortBio: 'A contemporary leader who bridges tradition and modernity, focusing on educational initiatives.',
      fullBio: 'Syed Abun Nur Chowdhury represents the contemporary face of the family\'s legacy. With a focus on educational initiatives and cultural preservation, he has worked to document the family\'s history while adapting its values to modern contexts. His efforts to digitize family records and establish educational institutions continue the tradition of service while embracing technological advances.',
      achievements: [
        'Established a digital archive of family history',
        'Founded a modern educational institution',
        'Created a cultural foundation to preserve Bengal\'s heritage'
      ],
      isNotable: true
    }
  ];

  private timelineEvents: TimelineEvent[] = [
    {
      id: 'arrival-bengal',
      title: 'Arrival in Bengal',
      year: 1350,
      description: 'Hazrat Shah Miran arrives in Bengal during the Delhi Sultanate period, establishing the family\'s presence in the region.',
      category: 'spiritual',
      relatedPersonIds: ['hazrat-shah-miran']
    },
    {
      id: 'lackeraz-grant',
      title: 'Lackeraz Land Grant',
      year: 1365,
      description: 'The Delhi Sultanate grants land known as "Lackeraz" to Hazrat Shah Miran for spiritual and community service.',
      category: 'property',
      relatedPersonIds: ['hazrat-shah-miran']
    },
    {
      id: 'zamindari-establishment',
      title: 'Establishment of Chowdhury Zamindari',
      year: 1680,
      description: 'The family\'s land holdings evolve into the Chowdhury zamindari estate in Kanchanpur, Ramganj, Lakshmipur.',
      category: 'political'
    },
    {
      id: 'hirar-bari-acquisition',
      title: 'Acquisition of Hirar Bari',
      year: 1850,
      description: 'The family acquires Hirar Bari, a former Nawab estate of Cumilla, expanding their influence and properties.',
      category: 'property',
      relatedPersonIds: ['golam-ahmed-chowdhury']
    },
    {
      id: 'education-reforms',
      title: 'Educational Reforms',
      year: 1920,
      description: 'Rashed Ahmed Chowdhury initiates significant educational reforms, establishing schools and promoting modern education.',
      category: 'social',
      relatedPersonIds: ['rashed-ahmed-chowdhury']
    },
    {
      id: 'independence-movement',
      title: 'Participation in Independence Movement',
      year: 1947,
      description: 'Family members actively participate in the independence movement, advocating for freedom and self-governance.',
      category: 'political',
      relatedPersonIds: ['mutaher-hossain-chowdhury']
    },
    {
      id: 'zamindari-abolition',
      title: 'Abolition of Zamindari System',
      year: 1950,
      description: 'The zamindari system is abolished, marking a significant transition in the family\'s role and influence.',
      category: 'political'
    },
    {
      id: 'cultural-foundation',
      title: 'Establishment of Cultural Foundation',
      year: 2000,
      description: 'Syed Abun Nur Chowdhury establishes a cultural foundation to preserve and promote the family\'s heritage and Bengali culture.',
      category: 'social',
      relatedPersonIds: ['syed-abun-nur-chowdhury']
    },
    {
      id: 'digital-archive',
      title: 'Creation of Digital Archive',
      year: 2015,
      description: 'The family history and documents are digitized, creating a comprehensive archive for future generations.',
      category: 'other',
      relatedPersonIds: ['syed-abun-nur-chowdhury']
    }
  ];

  private reflections: Reflection[] = [
    {
      id: 'legacy-matters',
      title: 'Why This Legacy Still Matters',
      author: 'Syed Abun Nur Chowdhury',
      date: new Date('2022-05-15'),
      content: `
        <p>In an age of rapid globalization and shifting values, many ask why ancestral legacies still matter. For the descendants of Hazrat Shah Miran, our heritage is not about clinging to past glory but about carrying forward timeless principles.</p>
        
        <p>Our ancestors came not seeking thrones but to serve. From spiritual guidance to educational reform, from land stewardship to political service, each generation adapted the core mission of service to their time's needs. This adaptability within consistency provides a blueprint for navigating our complex modern world.</p>
        
        <p>The family's story mirrors Bengal's journey through sultanates, colonial rule, independence, and modern nationhood. By understanding this intertwined history, we gain insight into how individual families can influence and respond to broader historical currents.</p>
        
        <p>Most importantly, this legacy reminds us that noble lineage is not about privilege but responsibility. As descendants of saints and servants, we are called to uphold values of compassion, justice, and community service in whatever contemporary forms these may take.</p>
        
        <p>In preserving and sharing this legacy, we hope to inspire not just family members but all who believe that connecting with our roots can help us branch toward a more meaningful future.</p>
      `,
      excerpt: 'In an age of rapid globalization and shifting values, many ask why ancestral legacies still matter. For the descendants of Hazrat Shah Miran, our heritage is not about clinging to past glory but about carrying forward timeless principles.',
      image: 'assets/images/placeholder-reflection.jpg',
      tags: ['legacy', 'values', 'heritage', 'responsibility']
    },
    {
      id: 'marriage-traditions',
      title: 'Marriage Traditions: Connecting Noble Houses',
      author: 'Amina Chowdhury',
      date: new Date('2023-02-10'),
      content: `
        <p>Marriage in the House of Syed Shah Miran has historically served both spiritual and social purposes. Beyond the Islamic foundation of family formation, marriages often connected our lineage with other notable families of spiritual or administrative significance.</p>
        
        <p>The alliances with families from Rajganj and Gazibari strengthened networks of influence while promoting shared values of service and spirituality. These weren't merely political arrangements but unions that reinforced a common vision for community welfare.</p>
        
        <p>Traditional ceremonies blended Bengali customs with Islamic practices, creating rich cultural tapestries that have evolved yet maintained core elements over centuries. From the formal proposal rituals to the elaborate wedding celebrations, each step carried symbolic significance.</p>
        
        <p>While arranged marriages were once the norm, guided by family elders seeking compatible spiritual and social backgrounds, modern generations have adopted more flexible approaches. Nevertheless, the emphasis on shared values and commitment to service remains a consideration even in contemporary marriage choices.</p>
        
        <p>Through these unions, our family history intertwines with many others, creating a network of relationships that have shaped the cultural and spiritual landscape of the region for generations.</p>
      `,
      excerpt: 'Marriage in the House of Syed Shah Miran has historically served both spiritual and social purposes. Beyond the Islamic foundation of family formation, marriages often connected our lineage with other notable families.',
      image: 'assets/images/placeholder-reflection.jpg',
      tags: ['marriage', 'traditions', 'alliances', 'culture']
    }
  ];

  constructor() { }

  getAllPeople(): Observable<Person[]> {
    return of(this.people);
  }

  getPersonById(id: string): Observable<Person | undefined> {
    return of(this.people.find(person => person.id === id));
  }

  getNotablePeople(): Observable<Person[]> {
    return of(this.people.filter(person => person.isNotable));
  }

  getAllTimelineEvents(): Observable<TimelineEvent[]> {
    return of(this.timelineEvents);
  }

  getTimelineEventsByCategory(category: string): Observable<TimelineEvent[]> {
    return of(this.timelineEvents.filter(event => event.category === category));
  }

  getAllReflections(): Observable<Reflection[]> {
    return of(this.reflections);
  }

  getReflectionById(id: string): Observable<Reflection | undefined> {
    return of(this.reflections.find(reflection => reflection.id === id));
  }

  // This would be expanded with actual API calls in a production environment
}