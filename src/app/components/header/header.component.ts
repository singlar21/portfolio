import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeColor, ThemeService } from '../../theme/theme.service';
import { Header, header } from '../../json/data.json';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerData:Header = header; // expose constant to template

  mobileMenuOpen:boolean = false;

  themeService =  inject(ThemeService);

  themeModalOpen = false;


  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

   toggleThemeModal() {
    this.themeModalOpen = !this.themeModalOpen;
  }

  changeTheme(theme: ThemeColor) {
    this.themeService.setTheme(theme);
    this.themeModalOpen = false; // close modal after selection
  }
}
