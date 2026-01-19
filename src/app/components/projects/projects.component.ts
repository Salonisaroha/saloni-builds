import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects } from '../../data/projects';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [fadeInUp]
})
export class ProjectsComponent {
  projects = projects;
}

