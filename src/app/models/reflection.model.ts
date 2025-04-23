export interface Reflection {
  id: string;
  title: string;
  author: string;
  date: Date;
  content: string;
  excerpt: string;
  image?: string;
  tags?: string[];
}