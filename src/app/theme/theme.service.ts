// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type ThemeColor = 'pink' | 'red' | 'blue';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private themeSubject = new BehaviorSubject<ThemeColor>('pink');
  currentTheme$ = this.themeSubject.asObservable();

  setTheme(theme: ThemeColor) {
    this.themeSubject.next(theme);
  }
}
