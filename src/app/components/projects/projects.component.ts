import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GRADIENT_MAP } from '../../theme/theme.constant';
import { ThemeService, ThemeColor } from '../../theme/theme.service';
import { companyProjects, ProjectData } from '../../json/data.json';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectList:ProjectData[] = companyProjects;

  gradientClass =  signal(GRADIENT_MAP.pink);
  
    constructor(private themeService:ThemeService) {
      this.themeService.currentTheme$.subscribe((theme: ThemeColor) => {
        this.gradientClass.set(GRADIENT_MAP[theme]);
      });
    }
}


