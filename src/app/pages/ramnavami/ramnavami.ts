import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-ramnavami',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './ramnavami.html',
  styleUrl: './ramnavami.css',
})
export class Ramnavami {
  // --- SECTION 1: MAIN HERO DATA ---
  festivalData = {
    title: 'Ram Navami',
    subtitle: 'The Birth of Maryada Purushottam',
    description: [
      "Ram Navami is a joyous Hindu festival celebrating the birth of Lord Rama, the seventh avatar of Lord Vishnu. Born to King Dasharatha and Queen Kausalya in Ayodhya, Lord Rama represents the embodiment of truth, righteousness, and virtue.",
      "Devotees celebrate this auspicious day with fasting (Vrat), reciting the Ramayana, and visiting temples. It marks the victory of goodness over evil and the establishment of Dharma on earth."
    ],
    image: '/festivals/rn/5.webp', 
    imageAlt: 'Ram Navami Celebration'
  };

  // --- SECTION 2: CARDS DATA ---
  cardsData = [
    {
      title: 'Morning Aarti',
      text: 'Join us for the divine morning prayers to start this auspicious day with blessings.',
      image: '/festivals/rn/1.webp'
    },
    {
      title: 'Ramayana Recitation',
      text: 'Participate in the Akhand Ramayan Path and listen to the divine tales of Lord Rama.',
      image: '/festivals/rn/2.webp'
    },
    {
      title: 'Evening Darshan',
      text: 'Experience the serene atmosphere during the evening lights and Maha Aarti.',
      image: '/festivals/rn/16.webp'
    },
    {
      title: 'Bhajan Kirtan',
      text: 'Immerse yourself in devotional songs praising the virtues of Shri Ram.',
      image: '/festivals/rn/13.webp' 
    },
    {
      title: 'Special Pooja',
      text: 'Participate in the special Archana and Abhishekam performed by our head priests.',
      image: '/festivals/rn/10.webp'
    },
    {
      title: 'Palkhi Seva',
      text: 'Join the grand procession celebrating the arrival of the Lord.',
      image: '/festivals/rn/4.webp'
    }
  ];
}