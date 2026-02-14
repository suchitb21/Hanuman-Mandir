import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navratri',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './navratri.html',
  styleUrl: './navratri.css',
})
export class Navratri {
  // --- SECTION 1: MAIN HERO DATA ---
  festivalData = {
    title: 'Shardiya Navratri',
    subtitle: 'Nine Nights of Devotion & Shakti',
    description: [
      "Navratri is a vibrant nine-night festival dedicated to the worship of Goddess Durga and her nine forms (Navadurga). It symbolizes the victory of good over evil, marking the defeat of the demon Mahishasura.",
      "The temple comes alive with colorful decorations, daily Homas, and the rhythmic beats of Garba and Dandiya Raas performed by devotees in honor of the Divine Mother."
    ],
    // Assuming your folder is named 'navratri' or 'n'. Adjust if needed.
    image: '/festivals/nr/1.webp', 
    imageAlt: 'Goddess Durga Navratri Celebration'
  };

  // --- SECTION 2: CARDS DATA ---
  cardsData = [
    {
      title: 'Devi Darshan',
      text: 'The auspicious invocation of Goddess Shakti marked by the installation of the Kalash on the first day.',
      image: '/festivals/nr/2.webp'
    },
    {
      title: 'Pooja',
      text: 'Join the community for joyous traditional dance evenings celebrating the rhythm of life and devotion.',
      image: '/festivals/nr/5.webp'
    },
    {
      title: 'Devotees',
      text: 'Participate in the grand Havan performed on the eighth day to invoke prosperity and peace.',
      image: '/festivals/nr/8.webp'
    },
    {
      title: 'Navratri Event',
      text: 'Worshipping young girls as representations of the Divine Mother on the auspicious day of Navami.',
      image: '/festivals/nr/17.webp' 
    },
    {
      title: 'Singing Event',
      text: 'Witness the Goddess adorned in a new divine form (Avatar) on each of the nine nights.',
      image: '/festivals/nr/12.webp'
    },
    {
      title: 'Navratri Participants',
      text: 'Celebrating the final victory on the tenth day (Dussehra) with special prayers and Simollanghan.',
      image: '/festivals/nr/15.webp'
    }
  ];
}