import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceSection {
  title: string;
  description: string;
  items?: string[]; // Optional list items like equipment
  contacts?: { name: string; phone: string }[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  
  services: ServiceSection[] = [
    {
      title: 'Medical Equipment Support',
      description: `In the spirit of selfless service (Seva), the Tilaknagar Devalaya Hanuman Mandir Trust has inaugurated a Medical Equipment Centre to support our fellow citizens during times of health challenges. We understand that recovery requires comfort, and accessibility to the right aids is crucial. 
      
      Devotees and residents in need can avail of these essential benefits for a temporary period by depositing a nominal refundable amount with the Mandir Trust. This ensures that essential care is accessible to all.`,
      items: [
        'Wheel Chairs', 
        'Walkers', 
        'Underarm Crutches', 
        'Commode Chairs', 
        'Walking Sticks', 
        'Air Beds', 
        'Back Rests'
      ],
      contacts: [
        { name: 'Prasanna Kulkarni', phone: '+91 98927 63786' },
        { name: 'Devendra Joshi', phone: '+91 98695 26735' }
      ]
    },
    {
      title: 'Matrimonial Bureau',
      description: `Marriages are decided in heaven but solemnized on earth. Our Matrimonial Bureau serves as a sacred bridge for families across all castes to come together and build relationships destined to last forever. 
      
      We are dedicated to helping eligible brides and grooms find their perfect soulmates in an environment rooted in trust, tradition, and divine blessings.`,
      contacts: [] // Empty list as per prompt
    },
    {
      title: 'Hanuman Mandir Trust Hall',
      description: `As the population of Tilaknagar grows, the need for accessible spaces to conduct auspicious functions has become paramount. To address this, the Trustees have opened the Mandir Hall to the community at a highly subsidized cost.
      
      This sacred venue is available for Upanayana ceremonies, Engagements, Weddings, and Birthday celebrations. Residents are also welcome to utilize this facility for family get-togethers and community meetings, ensuring every gathering is blessed by the divine presence.`,
      contacts: [
        { name: 'Kailash Yadav', phone: '+91 99301 38833' }
      ]
    },
    {
      title: 'Community Medical Camps',
      description: `The greatest wealth is health. Upholding our commitment to the well-being of our society, the Mandir Trust actively facilitates regular Medical Camps. 
      
      These initiatives bring healthcare professionals closer to the community, ensuring that every devotee has access to vital health check-ups and guidance. We believe that serving the health of the people is a true form of worship.`,
      contacts: [] // Empty list as per prompt
    }
  ];

}