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
      service: 'Mandir Maintennence', 
      description: 'Sponsor a full meal for 100 devotees visiting the Mandir.',
      amount: '₹ 5,001' 
    },
    { 
      service: 'Annual Prasad (Lifetime)', 
      description: 'Perform a special ritual bathing of the deity on your behalf.',
      amount: '₹ 11,000' 
    },
    { 
      service: 'Annual Jalabhishek', 
      description: 'Contribute towards the fresh flower garlands for the main idol.',
      amount: '₹ 1000' 
    },
    { 
      service: 'Daily Puja (1 year)', 
      description: 'Support the daily cleaning, electricity, and upkeep of the premises.',
      amount: '₹ 1,001' 
    },
    { 
      service: 'Daily Puja (1 month)', 
      description: 'Provide fodder and care for the cows in our affiliated Gaushala.',
      amount: '₹ 1,100' 
    },
    { 
      service: 'Lifetime Abhishek', 
      description: 'Become a key sponsor for major festivals like Hanuman Jayanti.',
      amount: '₹ 5,551' 
    }
  ];
}