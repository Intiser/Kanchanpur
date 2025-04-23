import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    standalone: false
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  
  constructor(private router: Router) {}
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}