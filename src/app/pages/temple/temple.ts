import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './temple.html',
  styleUrl: './temple.css',
})
export class Temple implements OnInit, OnDestroy {
  
  // Image Paths (Ensure these exist in public/temple/)
  templeImages = [
    { src: '/temple/3.webp', alt: 'Temple Interior View' },
    { src: '/temple/1.webp', alt: 'Temple Exterior View' }, // Placeholder name
    { src: '/temple/2.webp', alt: 'Renovation Plan' },   // Placeholder name
    { src: '/temple/4.webp', alt: ''},
  ];

  currentIndex = 0;
  autoPlayTimer: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  // --- CAROUSEL LOGIC ---
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.templeImages.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.templeImages.length) % this.templeImages.length;
  }

  // --- AUTOPLAY HANDLERS ---
  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, 4000); // Changes every 4 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

    // --- SECTION 2 DATA (UPDATED WITH DESCRIPTIONS) ---
  contributionRates = [
    { 
      service: 'Contribute a Stone', 
      description: 'Be a part of the brick and stone that shape our temple.',
      amount: '₹ 1000' 
    },
    { 
      service: 'Contribute 1 square foot', 
      description: 'Become a pillar of this divine structure.',
      amount: '₹ 16,000' 
    },
    { 
      service: 'General Contribution', 
      description: 'Strengthen the foundation of faith.',
      amount: '₹ 25,000' 
    },
    { 
      service: 'Silver Letters', 
      description: 'Etch your name on the Silver Wall of Devotion.',
      amount: '₹ 51,000' 
    },
    { 
      service: 'Golden Wall', 
      description: 'Make your devotion eternal on the Golden Wall of Honor.',
      amount: '₹ 1,00,000' 
    },
    { 
      service: 'Gangajali Yojana', 
      description: 'Prefer smaller steps contribute monthly for a year.',
      amount: '₹500/1,100/1,500' 
    }
  ];

}