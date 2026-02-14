import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  
  // CHANGED: Renamed variable to track ANY page that needs transparency
  private isTransparentPage = true; 
  
  activeMobileDropdown: string | null = null;

  navLinks = [
    { 
      label: 'FESTIVAL', 
      route: '/festival',
      children: [
        { label: 'HANUMAN JAYANTI', route: '/festival/hanuman-jayanti' },
        { label: 'RAM NAVAMI', route: '/festival/ram-navami' },
        { label: 'MAHA SHIVRATRI', route: '/festival/mahashivratri' },
        { label: 'NAVRATRI', route: '/festival/navratri'},
      ]
    },
    
    { label: 'SERVICES', route: '/services'  },
    
    { label: 'TEMPLE RENOVATION', route: '/temple' },

    { label: 'SEVA', route: '/seva' },

    { label: 'ABOUT US', route: '/about-us'},

  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkRoute();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    });
  }

  private checkRoute() {
    // UPDATED LOGIC:
    // Check if we are on Home ('/') OR Temple ('/temple')
    // If yes, allow transparency. If no, force solid background.
    const currentUrl = this.router.url;
    this.isTransparentPage = currentUrl === '/' || currentUrl === '/temple';
    
    this.updateNavbarState();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarState();
  }

  private updateNavbarState() {
    // If it's NOT a transparent page (like /seva or /festival), always show solid navbar
    if (!this.isTransparentPage) {
      this.isScrolled = true;
    } else {
      // If it IS Home or Temple, only show solid after scrolling 50% of screen
      const threshold = window.innerHeight * 0.5;
      this.isScrolled = window.scrollY > threshold;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleMobileDropdown(label: string) {
    if (this.activeMobileDropdown === label) {
      this.activeMobileDropdown = null;
    } else {
      this.activeMobileDropdown = label;
    }
  }

  closeMenu() {
    this.isMobileMenuOpen = false;
    this.activeMobileDropdown = null;
  }
}