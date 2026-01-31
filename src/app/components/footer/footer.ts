import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink], // Added RouterLink for navigation
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'Festival', route: '/festival' },
    { label: 'Services', route: '/services' },
    { label: 'Donation', route: '/donation' },
    { label: 'About Us', route: '/about-us' }
  ];
}