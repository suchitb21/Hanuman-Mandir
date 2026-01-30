import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface IdolData {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  idols: IdolData[] = [
    // your array unchanged
    { src: 'logo.png', alt: 'Lord Hanuman Idol 2' },
    { src: '/idols/ganpati.png', alt: 'Lord Hanuman Idol 2' },
    { src: '/idols/idol_1.png', alt: 'Lord Hanuman Idol 1' },
    { src: '/idols/idol_2.png', alt: 'Lord Hanuman Idol 2' },
    { src: '/idols/idol_3.png', alt: 'Lord Hanuman Idol 3' },
  ];

  currentSlideIndex = 0;
  private autoPlayTimer: any = null;
  private isBrowser = false;
  private tabVisible = true;

  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private cdr: ChangeDetectorRef  // Add for manual detection
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.tabVisible = !document.hidden;
      this.startAutoPlay();
      this.cdr.detectChanges();  // Force UI sync
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  @HostListener('window:visibilitychange', [])
  @HostListener('document:visibilitychange', [])  // Dual for safety
  handleVisibilityChange() {
    if (!this.isBrowser) return;
    this.tabVisible = !document.hidden;
    if (this.tabVisible) {
      this.startAutoPlay();
    } else {
      this.stopAutoPlay();
    }
  }

  private nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.idols.length;
    this.cdr.detectChanges();  // Ensure slide updates
  }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    if (this.isBrowser && this.tabVisible) {
      this.autoPlayTimer = setTimeout(() => {
        this.nextSlide();
        this.startAutoPlay();  // Chain continues
      }, 3000);
    }
  }

  private stopAutoPlay(): void {
    if (this.autoPlayTimer) {
      clearTimeout(this.autoPlayTimer);
      this.autoPlayTimer = null;
    }
  }

  onNextClick(): void {
    this.stopAutoPlay();
    this.nextSlide();
    this.startAutoPlay();
  }

  onPrevClick(): void {
    this.stopAutoPlay();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.idols.length) % this.idols.length;
    this.cdr.detectChanges();
    this.startAutoPlay();
  }

  onDotClick(index: number): void {
    this.stopAutoPlay();
    this.currentSlideIndex = index;
    this.cdr.detectChanges();
    this.startAutoPlay();
  }
}
