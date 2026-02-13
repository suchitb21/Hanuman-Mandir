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
      imageUrl: '/trustees/2.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/3.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/4.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/5.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/6.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/7.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/8.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/9.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/10.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/11.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/12.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/14.webp' // Replace with actual image path
    },
    {
      name: 'Shri Ramnath Kovind',
      imageUrl: '/trustees/15.webp' // Replace with actual image path
    },
  ];
}