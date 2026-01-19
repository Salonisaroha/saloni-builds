import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { skills, skillCategories, Skill } from '../../data/skills';
import { fadeInUp } from '../../animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  animations: [fadeInUp]
})
export class SkillsComponent {
  skills = skills;
  skillCategories = skillCategories;

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategoryKeys(): Array<keyof typeof skillCategories> {
    return Object.keys(this.skillCategories) as Array<keyof typeof skillCategories>;
  }

  getCategoryName(category: string): string {
    return this.skillCategories[category as keyof typeof skillCategories];
  }
}

