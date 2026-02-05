import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-mahashivratri',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './mahashivratri.html',
  styleUrl: './mahashivratri.css',
})
export class Mahashivratri {
  // --- SECTION 1: MAIN HERO DATA ---
  festivalData = {
    title: 'Maha Shivratri',
    subtitle: 'The Great Night of Shiva',
    description: [
      "Maha Shivratri is one of the most significant Hindu festivals, celebrated annually in honor of Lord Shiva. Unlike other festivals of mirth, this is a night of introspection, fasting, and meditation on Shiva—the transformer and destroyer of darkness.",
      "Devotees observe a strict fast and perform the 'Rudra Abhishekam' throughout the night (Jagaran), believing that sincere worship on this auspicious night washes away sins and liberates the soul from the cycle of birth and death."
    ],
    // Updated path to match your likely folder structure
    image: '/festivals/msr/2.webp', 
    imageAlt: 'Lord Shiva Maha Shivratri Celebration'
  };

  // --- SECTION 2: CARDS DATA ---
  cardsData = [
    {
      title: 'Rudra Abhishekam',
      text: 'Participate in the continuous pouring of milk, honey, and water on the Shiva Lingam accompanied by Vedic chants.',
      image: '/festivals/msr/7.webp'
    },
    {
      title: 'Night Jagaran',
      text: 'Join the devotees in an all-night vigil, staying awake with prayers, meditation, and spiritual energy.',
      image: '/festivals/msr/3.webp'
    },
    {
      title: 'Maha Aarti',
      text: 'Witness the grand Aarti performed at midnight, illuminating the temple with divine light and sound.',
      image: '/festivals/msr/4.webp'
    },
    {
      title: 'Om Namah Shivaya',
      text: 'Immerse yourself in the continuous chanting of the Panchakshara Mantra to purify the mind and soul.',
      image: '/festivals/msr/5.webp' 
    },
    {
      title: 'Bilva Patra Offering',
      text: 'Offer the sacred Bilva leaves to Lord Shiva, a gesture believed to bestow immense spiritual merit.',
      image: '/festivals/msr/6.webp'
    },
    {
      title: 'Palkhi Procession',
      text: 'Join the grand procession of the Utsav Murti celebrating the divine marriage of Shiva and Parvati.',
      image: '/festivals/msr/1.webp'
    }
  ];
}