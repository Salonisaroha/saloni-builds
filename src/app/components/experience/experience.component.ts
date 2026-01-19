import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences } from '../../data/experience';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  animations: [fadeInUp]
})
export class ExperienceComponent {
  experiences = experiences;
}

