import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OriginsPageComponent } from './pages/origins-page/origins-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { FamilyTreePageComponent } from './pages/family-tree-page/family-tree-page.component';
import { NotableFiguresPageComponent } from './pages/notable-figures-page/notable-figures-page.component';
import { ReflectionsPageComponent } from './pages/reflections-page/reflections-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'origins', component: OriginsPageComponent },
  { path: 'timeline', component: TimelinePageComponent },
  { path: 'family-tree', component: FamilyTreePageComponent },
  { path: 'notable-figures', component: NotableFiguresPageComponent },
  { path: 'reflections', component: ReflectionsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' }
];