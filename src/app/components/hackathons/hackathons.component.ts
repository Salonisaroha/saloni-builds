import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { hackathonEvents } from '../../data/hackathons';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-hackathons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hackathons.component.html',
  styleUrl: './hackathons.component.scss',
  animations: [fadeInUp]
})
export class HackathonsComponent {
  hackathonEvents = hackathonEvents;
  selectedImages: string[] = [];
  currentImageIndex = 0;
  showLightbox = false;

  openLightbox(images: string[], index: number = 0) {
    this.selectedImages = images;
    this.currentImageIndex = index;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.showLightbox = false;
    document.body.style.overflow = 'auto';
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.selectedImages.length;
  }

  prevImage() {
    this.currentImageIndex = this.currentImageIndex === 0 ? this.selectedImages.length - 1 : this.currentImageIndex - 1;
  }
}