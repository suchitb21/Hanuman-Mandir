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
    { label: 'Seva', route: '/seva' },
    { label: 'Contact', route: '/contact' },
    { label: 'Donation', route: '/temple', fragment: 'donation' },
    { label: 'About Us', route: '/about-us' }
  ];
}