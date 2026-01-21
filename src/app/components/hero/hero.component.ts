import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../data/personal-info';
import { fadeIn, fadeInUp } from '../../animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [fadeIn, fadeInUp]
})
export class HeroComponent implements OnInit {
  personalInfo = personalInfo;
  displayedText = '';
  titles = ['Passionate Programmer', 'Problem Solver'];
  currentTitleIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;

  ngOnInit() {
    this.typeWriter();
  }

  typeWriter() {
    const currentTitle = this.titles[this.currentTitleIndex];

    if (!this.isDeleting && this.currentCharIndex < currentTitle.length) {
      this.displayedText = currentTitle.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
      setTimeout(() => this.typeWriter(), 100);
    } else if (this.isDeleting && this.currentCharIndex > 0) {
      this.displayedText = currentTitle.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
      setTimeout(() => this.typeWriter(), 50);
    } else if (!this.isDeleting && this.currentCharIndex === currentTitle.length) {
      setTimeout(() => {
        this.isDeleting = true;
        this.typeWriter();
      }, 2000);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      setTimeout(() => this.typeWriter(), 500);
    }
  }

  scrollToSection(section: string) {
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

