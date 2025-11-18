import { Component, signal } from '@angular/core';
import { GRADIENT_MAP } from '../../theme/theme.constant';
import { ThemeService, ThemeColor } from '../../theme/theme.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  gradientClass =  signal(GRADIENT_MAP.pink);
  
    constructor(private themeService:ThemeService) {
      this.themeService.currentTheme$.subscribe((theme: ThemeColor) => {
        this.gradientClass.set(GRADIENT_MAP[theme]);
      });
    }
}
