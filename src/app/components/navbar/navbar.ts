import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  isScrolled = false;
  isMobileMenuOpen = false;
  
  // Track which dropdown is open on mobile
  activeMobileDropdown: string | null = null;

  navLinks = [
    { 
      label: 'FESTIVAL', 
      route: '/festival',
      children: [
        { label: 'Hanuman Jayanti', route: '/festival/hanuman-jayanti' },
        { label: 'Ram Navami', route: '/festival/ram-navami' },
        { label: 'Diwali', route: '/festival/diwali' }
      ]
    },
    { 
      label: 'SERVICES', 
      route: '/services',
      children: [
        { label: 'Daily Aarti', route: '/services/aarti' },
        { label: 'Pooja Booking', route: '/services/pooja' },
        { label: 'Prasad Distribution', route: '/services/prasad' }
      ]
    },
    { 
      label: 'DONATION', 
      route: '/donation',
      children: [
        { label: 'Online Donation', route: '/donation/online' },
        { label: 'Bank Transfer', route: '/donation/bank' },
        { label: 'Annadan', route: '/donation/annadan' }
      ]
    },
    { 
      label: 'ABOUT US', 
      route: '/about-us',
      children: [
        { label: 'Temple History', route: '/about-us/history' },
        { label: 'Committee', route: '/about-us/committee' },
        { label: 'Contact Info', route: '/about-us/contact' }
      ]
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const threshold = window.innerHeight * 0.5;
    this.isScrolled = window.scrollY > threshold;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Mobile specific: Toggle sub-menus
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