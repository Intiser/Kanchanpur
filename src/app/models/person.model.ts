export interface Person {
  id: string;
  name: string;
  title?: string;
  birthYear?: number;
  deathYear?: number;
  image?: string;
  shortBio: string;
  fullBio?: string;
  achievements?: string[];
  parentId?: string;
  spouseIds?: string[];
  childrenIds?: string[];
  isNotable?: boolean;
}