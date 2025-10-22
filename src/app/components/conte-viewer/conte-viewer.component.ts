import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { Slide } from '../../models/slide.model';
import { SLIDES } from '../../data/slides.data';

@Component({
  selector: 'app-conte-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conte-viewer.component.html',
  styleUrls: ['./conte-viewer.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('600ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ConteViewerComponent implements OnInit {
  slides: Slide[] = SLIDES;
  currentSlideIndex: number = 0;
  isMenuOpen: boolean = false;
  isTablet: boolean = false;
  isLoading: boolean = true;

   constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.checkScreenSize();
    this.preloadImages();
  }

  get currentSlide(): Slide {
    return this.slides[this.currentSlideIndex];
  }

  get progress(): number {
    return ((this.currentSlideIndex + 1) / this.slides.length) * 100;
  }

  nextSlide(): void {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
       this.cdr.detectChanges();
    }
  }

  previousSlide(): void {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
       this.cdr.detectChanges();
    }
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
    this.isMenuOpen = false;
     this.cdr.detectChanges();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.previousSlide();
    } else if (event.key === 'Escape') {
      this.isMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isTablet = window.innerWidth < 768;
  }

  private preloadImages(): void {
    let loadedImages = 0;
    const totalImages = this.slides.length;

    this.slides.forEach(slide => {
      const img = new Image();
      img.onload = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          this.isLoading = false;
        }
      };
      img.onerror = () => {
        loadedImages++;
        if (loadedImages === totalImages) {
          this.isLoading = false;
        }
      };
      img.src = slide.imageUrl;
    });
  }

  // Touch support pour Tablette
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.previousSlide();
      }
    }
  }
}