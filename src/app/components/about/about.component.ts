import { Component, signal } from '@angular/core';
import { ThemeColor, ThemeService } from '../../theme/theme.service';
import { GRADIENT_MAP } from '../../theme/theme.constant';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgClass],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  gradientClass =  signal(GRADIENT_MAP.pink);

  constructor(private themeService:ThemeService) {
    this.themeService.currentTheme$.subscribe((theme: ThemeColor) => {
      this.gradientClass.set(GRADIENT_MAP[theme]);
    });
  }

}
