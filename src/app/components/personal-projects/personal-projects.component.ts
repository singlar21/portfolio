import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { GRADIENT_MAP } from '../../theme/theme.constant';
import { ThemeService, ThemeColor } from '../../theme/theme.service';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.css'
})
export class PersonalProjectsComponent {
  projectList: any[] = projects;

  gradientClass =  signal(GRADIENT_MAP.pink);
  
    constructor(private themeService:ThemeService) {
      this.themeService.currentTheme$.subscribe((theme: ThemeColor) => {
        this.gradientClass.set(GRADIENT_MAP[theme]);
      });
    }

}


export const projects = [
  {
    name: "www.rohikastore.com",
    company: "Rohika",
    description: `Rohika Store is a high-end online platform dedicated to showcasing and selling authentic Indian jewellery. Designed with elegance and usability in mind, 
    the website highlights a wide range of collections including Polki Kundan, Moissanite, Bridal Sets, Earrings, Bangles, Maangtikkas, and exclusive combo sets.`,
    skills: ["Shopify Liquid Templates", "Custom Theme Development", "Razorpay Integration", "PhonePe Integration", "Twilio Notifications", "Product Catalog & Collection Management", "Discounts & Loyalty Programs"],
    link: "https://rohikastore.com",
    roles: [
      "Shopify Development: Custom theme integration and setup, working with Shopify Liquid templates.",
      "Payment Gateway Integration: Razorpay and PhonePe integration for seamless online payments.",
      "API Integration: Consumed Shopify APIs to sync products and implement billing functionality in an external project.",
      "Front-End Customization: Tailored the website’s UI/UX to match brand identity, ensuring responsiveness across devices.",
      "E-commerce Functionality: Managed product catalog, collections, discounts, and loyalty programs.",
      "Implemented Twilio integration to automate notifications for each event."
    ]
  },
  {
    name: "Rohika Billing",
    company: "Rohika",
    description: `A web-based billing and invoice management application designed to streamline sales and accounting processes for small to medium businesses. The app allows users to:
                  <li>Create, manage, and track invoices with real-time updates.</li>
                  <li>Automate billing workflows, including recurring invoices and payment reminders.</li>
                  <li>Generate detailed reports on sales, revenue, and outstanding payments.</li>
                  <li>Securely manage user accounts with role-based access.</li>`,
    link: "https://rohika-billing-app.web.app",
    skills: ["Angular 15", "Spring Boot", "REST APIs", "Firebase", "PostgreSQL", "Heroku", "ChatGPT"],
    roles: [
      "Designed and developed the billing application from scratch using Angular and Firebase.",
      "Integrated Shopify webhooks to automate order tracking and invoice generation.",
      "Implemented real-time billing and invoice management with Firebase Firestore.",
      "Developed responsive UI/UX for seamless desktop and mobile experience.",
    ]
  },
  {
    "name": "JSONBhai",
    "company": "Personal Project",
    "description": "A web-based tool for working with JSON data, designed to help developers and data analysts quickly format, compare, minify, and validate JSON. Key features include:\n<li>JSON formatting for better readability.</li>\n<li>Comparison of multiple JSON objects to detect differences.</li>\n<li>Minification to reduce file size.</li>\n<li>Validation to ensure JSON structure correctness.</li>",
    "link": "https://jsonbhai.site/",
    "skills": ["TypeScript", "Angular 15", "HTML5", "CSS3", "Bootstrap", "Firebase", "ChatGPT"],
    "roles": [
      "Designed and developed JSONBhai from scratch as a full-stack web application.",
      "Implemented JSON formatting, comparison, minification, and validation features.",
      "Created a responsive and intuitive UI for efficient developer workflows.",
      "Optimized performance for handling large JSON files with minimal delay.",
      "Ensured cross-browser compatibility and smooth user experience on desktop and mobile."
    ]
  }

];


