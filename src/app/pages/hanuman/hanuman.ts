import { Component } from '@angular/core';
import { CommonModule , NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hanuman',
  standalone: true,
  imports: [CommonModule,NgOptimizedImage],
  templateUrl: './hanuman.html',
  styleUrl: './hanuman.css',
})
export class Hanuman {
  // --- SECTION 1: MAIN HERO DATA ---
  festivalData = {
    title: 'Hanuman Jayanti',
    subtitle: 'Celebrating Strength & Devotion',
    description: [
      "Hanuman Jayanti is a Hindu festival that celebrates the birth of the Hindu deity, and one of the protagonists of the Ramayana, Hanuman. The festival is celebrated on different days in different parts of India.",
      "Devotees visit temples to seek protection and blessings. It is believed that worshiping Lord Hanuman on this day liberates believers from fear and negativity."
    ],
    image: '/festivals/hj/19.webp', 
    imageAlt: 'Hanuman Jayanti Celebration'
  };

  // --- SECTION 2: CARDS DATA (New) ---
  cardsData = [
    {
      title: 'Morning Aarti',
      text: 'Join us for the divine morning prayers to start your day with blessings and positivity.',
      image: '/festivals/hj/2.webp'
    },
    {
      title: 'Special Pooja',
      text: 'Participate in the special Archana and Abhishekam performed by our head priests.',
      image: '/festivals/hj/12.webp'
    },
    {
      title: 'Evening Darshan',
      text: 'Experience the serene atmosphere during the evening lights and community chanting.',
      image: '/festivals/hj/16.webp'
    },
    {
      title: 'Morning Aarti',
      text: 'Join us for the divine morning prayers to start your day with blessings and positivity.',
      image: '/festivals/hj/10.webp' 
    },
    {
      title: 'Special Pooja',
      text: 'Participate in the special Archana and Abhishekam performed by our head priests.',
      image: '/festivals/hj/8.webp'
    },
    {
      title: 'Evening Darshan',
      text: 'Experience the serene atmosphere during the evening lights and community chanting.',
      image: '/festivals/hj/4.webp'
    }
  ];
}