import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skills:SkillCategory[] = SKILLS;

}

export interface SkillCategory {
  title: string;
  icon?: string;          // Optional emoji/icon
  type: 'list' | 'badge'; // Whether to render as <ul> or badge <span>
  color: string;          // Tailwind text color for heading
  items: string[];        // Skill items
  badgeColor?: string;    // If type=badge, bg/text color for badges
}

export const SKILLS: SkillCategory[] = [
  {
    title: 'Programming',
    icon: '💻',
    type: 'list',
    color: 'text-indigo-700',
    items: [
      'Core Java & Advanced Java',
      'Spring Boot, Microservices',
      'SOAP & REST APIs',
      'JPA, Hibernate',
      'Apache POI',
      'GMAIL API'
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    type: 'badge',
    color: 'text-indigo-700',
    items: [
      'Angular 2–18',
      'JSF',
      'Android',
      'JS/TS',
      'HTML5/CSS3',
      'Bootstrap',
      'Tailwind CSS'
    ],
    badgeColor: 'bg-indigo-100 text-indigo-800'
  },
  {
    title: 'Databases',
    icon: '🗄️',
    type: 'list',
    color: 'text-indigo-700',
    items: ['MySQL', 'PostgreSQL', 'SQL Server']
  },
  {
    title: 'DevOps & Tools',
    icon: '⚙️',
    type: 'list',
    color: 'text-indigo-700',
    items: ['Jenkins, Git, GitLab, SVN/CVS', 'Jira, AWS (basics)', 'Docker, Kubernetes']
  },
  {
    title: 'Messaging & Event Streaming',
    icon: '🔄',
    type: 'list',
    color: 'text-indigo-700',
    items: ['Apache Kafka', 'Rabbit MQ']
  },
  {
    title: 'Servers',
    icon: '🖥️',
    type: 'list',
    color: 'text-indigo-700',
    items: ['Tomcat', 'Heroku', 'Firebase']
  },
  {
    title: 'Other Tools & Practices',
    icon: '🛠️',
    type: 'badge',
    color: 'text-green-700',
    items: [
      'Agile & Scrum',
      'Design Patterns',
      'OOPs',
      'Manual Testing',
      'JUnit',
      'Mockito',
      'ChatGPT',
      'AmazonQ',
      'PowerBI'
    ],
    badgeColor: 'bg-green-100 text-green-800'
  }
];
