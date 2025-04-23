import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { FamilyTreeComponent } from './components/family-tree/family-tree.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { QuoteComponent } from './components/quote/quote.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BiographyModalComponent } from './components/biography-modal/biography-modal.component';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { OriginsPageComponent } from './pages/origins-page/origins-page.component';
import { TimelinePageComponent } from './pages/timeline-page/timeline-page.component';
import { FamilyTreePageComponent } from './pages/family-tree-page/family-tree-page.component';
import { NotableFiguresPageComponent } from './pages/notable-figures-page/notable-figures-page.component';
import { ReflectionsPageComponent } from './pages/reflections-page/reflections-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    TimelineComponent,
    FamilyTreeComponent,
    PersonCardComponent,
    QuoteComponent,
    ContactFormComponent,
    BiographyModalComponent,
    HomePageComponent,
    OriginsPageComponent,
    TimelinePageComponent,
    FamilyTreePageComponent,
    NotableFiguresPageComponent,
    ReflectionsPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }