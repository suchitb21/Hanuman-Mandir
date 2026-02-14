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
      name: 'Kiran Shirwalkar',
      imageUrl: '/trustees/2.webp' // Replace with actual image path
    },
    {
      name: 'Sanjay Sawant',
      imageUrl: '/trustees/3.webp' // Replace with actual image path
    },
    {
      name: 'Pradeep Dicholkar',
      imageUrl: '/trustees/4.webp' // Replace with actual image path
    },
    {
      name: 'Pravin Thakkar',
      imageUrl: '/trustees/5.webp' // Replace with actual image path
    },
    {
      name: 'Milind Naamjoshi',
      imageUrl: '/trustees/6.webp' // Replace with actual image path
    },
    {
      name: 'Santosh Nitore',
      imageUrl: '/trustees/7.webp' // Replace with actual image path
    },
    {
      name: 'Mahendra Gaikwad',
      imageUrl: '/trustees/8.webp' // Replace with actual image path
    },
    {
      name: 'Nalin Thakkar',
      imageUrl: '/trustees/9.webp' // Replace with actual image path
    },
    {
      name: 'Uday Joshi',
      imageUrl: '/trustees/10.webp' // Replace with actual image path
    },
    {
      name: 'Ravindra Ghag',
      imageUrl: '/trustees/11.webp' // Replace with actual image path
    },
    {
      name: 'Sumedha Shirwalkar',
      imageUrl: '/trustees/12.webp' // Replace with actual image path
    },
    {
      name: 'Hemant Patare',
      imageUrl: '/trustees/14.webp' // Replace with actual image path
    },
    {
      name: 'Kailash Sangle',
      imageUrl: '/trustees/15.webp' // Replace with actual image path
    },
  ];
}