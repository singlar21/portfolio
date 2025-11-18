import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GRADIENT_MAP } from '../../theme/theme.constant';
import { ThemeService, ThemeColor } from '../../theme/theme.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  gradientClass =  signal(GRADIENT_MAP.pink);
  
    constructor(private themeService:ThemeService) {
      this.themeService.currentTheme$.subscribe((theme: ThemeColor) => {
        this.gradientClass.set(GRADIENT_MAP[theme]);
      });
    }
experienceList = [
    {
      role: 'Technical Lead',
      company: 'Ericsson India Pvt. Ltd.',
      period: 'Apr 2021 – Sep 2025',
      description: 'Led migration from AngularJS to Angular 16 and built microservices with RabbitMQ.',
      logoUrl: 'assets/ericsson.jpeg',
      skills: ['Angular 15', 'AngularJS','Spring Boot', 'Microservices', 'RabbitMQ', 'Agile', 'Kubernetes', 'Docker', 'PowerBI', 'Git', 'PostgreSQL',
        'Kafka','Elastic Search','Kibana']
    },
    {
      role: 'Senior Software Engineer',
      company: 'PeopleStrong HR Services',
      period: 'Jul 2017 – Mar 2021',
      description: 'Developed HRMS modules and integrated ClearTax APIs for payroll analytics.',
      logoUrl: 'assets/peoplestrong.png',
      skills: ['Angular 8', 'Spring Boot', 'SQL Server', 'REST APIs', 'JSF', 'Kafka']
    },
    {
      role: 'Software Developer',
      company: 'Libsys Ltd.',
      period: 'Jul 2014 – Jun 2017',
      description: 'Worked on RFID-enabled asset management and ERP systems.',
      logoUrl: 'assets/libsys.jpeg',
      skills: ['Java', 'MySQL', 'GWT', 'Apache POI', 'Android']
    }
  ];
}
