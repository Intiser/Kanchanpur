export interface TimelineEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  category: 'spiritual' | 'political' | 'social' | 'property' | 'other';
  image?: string;
  relatedPersonIds?: string[];
}