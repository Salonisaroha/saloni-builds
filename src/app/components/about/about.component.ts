import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { personalInfo } from '../../data/personal-info';
import { fadeInUp, fadeInLeft, fadeInRight } from '../../animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  animations: [fadeInUp, fadeInLeft, fadeInRight]
})
export class AboutComponent {
  personalInfo = personalInfo;
}

