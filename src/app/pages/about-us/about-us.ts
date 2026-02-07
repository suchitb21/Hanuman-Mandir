import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for *ngFor in standalone components

// 1. Define the structure for a Trustee object
export interface Trustee {
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  // 2. Dynamic Data Array: Add, remove, or reorder items here to update the view automatically.
  // Use '/temple/your-image.webp' for images in your public folder.
  trustees: Trustee[] = [
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/temple/trustee1.webp' // Replace with actual image path
    },
    {
      name: 'Smt. Draupadi Murmu',
      imageUrl: '/temple/trustee2.webp' // Replace with actual image path
    },
    {
      name: 'Dr. Manmohan Singh',
      imageUrl: '/temple/trustee3.webp' // Replace with actual image path
    },
    {
      name: 'Shri Narendra Modi',
      imageUrl: '/temple/trustee4.webp' // Replace with actual image path
    },
    // Example of adding a new one:
    // { name: 'New Member Name', imageUrl: '/temple/new-member.jpg' }
  ];
}