import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seva.html',
  styleUrl: './seva.css',
})
export class Seva {
  
  // --- SECTION 1 DATA (PRESERVED) ---
  sevaSchemes = [
    { 
      title: '1-Select Occasion', 
      description: 'Birthday , Anniversary , Etc.' 
    },
    { 
      title: '2-Choose Type of Abhishek', 
      description: 'Lifetime or Not' 
    },
    { 
      title: '3-Deity', 
      description: 'Shri Ganesh, Shri Mahadeo, Shri Hanuman, Shri Datta, Devi' 
    },
    { 
      title: '4-Choice of Charity', 
      description: 'Education, Health, Gaushala, Orphanage' 
    },
    { 
      title: 'Note', 
      description: 'Minimum amout is Rs. 1000' 
    }
  ];

  // --- SECTION 2 DATA (UPDATED WITH DESCRIPTIONS) ---
  contributionRates = [
    { 
      service: 'Mandir Maintenance', 
      description: 'Contribute to the daily operations of mandir.',
      amount: '₹ 5,001' 
    },
    { 
      service: 'Prasad (Lifetime)', 
      description: 'On Every Hanuman Janmotsav receive a prasad from our mandir.',
      amount: '₹ 11,000' 
    },
    { 
      service: 'Prasad (Lifetime)', 
      description: 'On Every Mahashivratri receive a prasad from our mandir.',
      amount: '₹ 11,000' 
    },
    { 
      service: 'Annual Jalabhishek', 
      description: 'Contribute towards the fresh flower garlands for the main idol.',
      amount: '₹ 1000' 
    },
    { 
      service: 'Daily Pooja (1 year)', 
      description: 'Contribute to our pooja.',
      amount: '₹ 1,001' 
    },
    { 
      service: 'Daily Pooja (1 month)', 
      description: 'Contribute to our pooja.',
      amount: '₹ 151' 
    },
    { 
      service: 'Lifetime Abhishek', 
      description: 'A one time offering for a lifetime of annual blessings.',
      amount: '₹ 5,551' 
    }
  ];
}