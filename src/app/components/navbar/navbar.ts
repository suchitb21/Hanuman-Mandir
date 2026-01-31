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
  private isHomePage = true;
  activeMobileDropdown: string | null = null;

  navLinks = [
    { 
      label: 'FESTIVAL', 
      route: '/festival',
      children: [ // Has children -> Shows dropdown
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
      children: [ // Has children -> Shows dropdown
        { label: 'MEDICAL EQUIPMENTS', route: '/services/me' },
        { label: 'MATRIMONIAL', route: '/services/mm' },
        { label: 'MEDICAL CAMPS', route: '/services/mc' }
      ]
    },
    { 
      label: 'TEMPLE RENOVATION', 
      route: '/temple' 
      // NO children -> Direct link, No arrow
    },
    { 
      label: 'SEVA', 
      route: '/seva' 
      // NO children -> Direct link, No arrow
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
    this.checkRoute();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRoute();
    });
  }

  private checkRoute() {
    this.isHomePage = this.router.url === '/';
    this.updateNavbarState();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateNavbarState();
  }

  private updateNavbarState() {
    if (!this.isHomePage) {
      this.isScrolled = true;
    } else {
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