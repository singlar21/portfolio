import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GRADIENT_MAP } from '../../theme/theme.constant';
import { ThemeService, ThemeColor } from '../../theme/theme.service';
import { ProjectData } from '../../data/interfaces';
import { personalProjects } from '../../data/profile.constant';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.css'
})
export class PersonalProjectsComponent {
  projectList: ProjectData[] = personalProjects;

  gradientClass =  signal(GRADIENT_MAP.pink);
  
    constructor(private themeService:ThemeService) {
      this.themeService.currentTheme$.subscribe((theme: ThemeColor) => {
        this.gradientClass.set(GRADIENT_MAP[theme]);
      });
    }
}


