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
  
  // Track if we are on the home page
  private isHomePage = true;

  // Track which dropdown is open on mobile
  activeMobileDropdown: string | null = null;

  navLinks = [
    { 
      label: 'FESTIVAL', 
      route: '/festival',
      children: [
        { label: 'HANUMAN JAYANTI', route: '/festival/hanuman-jayanti' },
        { label: 'RAM NAVAMI', route: '/festival/ram-navami' },
        { label: 'MAHA SHIVRATRI', route: '/festival/mahashivratri' },
        { label: 'JANMASHTAMI', route: '/festival/janmashtami'},
        { label: 'NAVRATRI', route: '/festival/navratri'},
        { label: 'OTHER', route: '/festival/other'},
      ]
    },
    { 
      label: 'SERVICES', 
      route: '/services',
      children: [
        { label: 'MEDICAL EQUIPMENTS', route: '/services/me' },
        { label: 'MATRIMONIAL', route: '/services/mm' },
        { label: 'MEDICAL CAMPS', route: '/services/mc' }
      ]
    },
    { 
      label: 'TEMPLE RENOVATION', 
      route: '/temple',
      children: [
        { label: 'VISION', route: '/tr/vision' },
        { label: 'CONTRIBUTE', route: '/tr/contribute' },
      ]
    },
    { 
      label: 'SEVA', 
      route: '/seva',
      children: [
        { label: 'PERSONAL', route: '/seva/online' },
        { label: 'FAMILY', route: '/seva/bank' },
      ]
    },
    { 
      label: 'ABOUT US', 
      route: '/about-us',
      children: [
        { label: 'HANUMAN MANDIR', route: '/about-us/history' },
        { label: 'TRUSTEES', route: '/about-us/committee' },
        { label: 'CONTACT', route: '/about-us/contact' }
      ]
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // 1. Check current URL immediately on load
    this.checkRoute();

    // 2. Listen for navigation changes to re-check URL
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    });
  }

  // Determine if we are on the home page
  private checkRoute() {
    // Adjust this string if your home route is different (e.g., '/home')
    this.isHomePage = this.router.url === '/';
    
    // Force recalculation of navbar state immediately after route change
    this.updateNavbarState();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarState();
  }

  // Centralized logic: Combines "Page Location" AND "Scroll Position"
  private updateNavbarState() {
    if (!this.isHomePage) {
      // RULE 1: If NOT on Home Page, always force the beige background
      this.isScrolled = true;
    } else {
      // RULE 2: If ON Home Page, only show background if scrolled past 50vh
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