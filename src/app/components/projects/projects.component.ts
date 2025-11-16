import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectList:any[] = projects;

}


 export const projects = [
  {
    name: "CMC (Configuration Management Center)",
    company: "Ericsson India Pvt. Ltd. (Jan 2023 - Sep 2025)",
    description: `CMC is a software solution for administering and configuring multiple network nodes. 
    Collaborated closely with the Germany client team to manage communications, requirements, and delivery schedules.`,
    skills: ["Angular JS", "Angular 17", "Spring Boot", "RabbitMQ", "REST APIs", "Microservices", "Agile", "Team Coordination", "Docker", "Kubernetes", "JUnit", "Mockito"],
    roles: [
      "Primary point of contact between India and Germany teams.",
      "Coordinated requirements, feedback, and delivery schedules; facilitated daily/weekly calls and issue resolution.",
      "Participated in AngularJS to Angular 16 migration.",
      "Architected microservices with RabbitMQ for asynchronous communication and mentored junior developers."
    ]
  },
  {
    name: "QMT (Quality Metrics Test)",
    company: "Ericsson India Pvt. Ltd. (Apr 2021 - Dec 2022)",
    description: `QMT is a quality tracking system measuring automation savings, performance, and providing quality insights for stakeholders.`,
    skills: ["Angular 16", "JSF", "Spring Boot", "MySQL", "Power BI", "Stored Procedures", "REST APIs", "Agile", "Hibernate", "Redis", "JUnit"],
    roles: [
      "Optimized MySQL queries, improving performance by 30%; automated savings calculations, reducing manual effort by 90%.",
      "Integrated Power BI dashboards in Angular for better visualization.",
      "Mentored junior developers and coordinated with QA/product owners in Agile/Scrum.",
      "Migrated JSF app to Angular 8 and upgraded to Angular 16."
    ]
  },
  {
    name: "AltWorklife (HRMS Portal)",
    company: "PeopleStrong HR Services (Jul 2017 - Mar 2021)",
    description: `AltWorklife is an enterprise HR management platform with modules like payroll, leave management, and investment tracking, designed for seamless employee experiences.`,
    link: "https://www.peoplestrong.com/human-capital-management-software",
    skills: ["Angular 8", "JSF", "Spring Boot", "EJB", "Hibernate", "REST APIs", "ClearTax-AltWorklife Integration", "SQL Server"],
    roles: [
      "Handled L2 support for production issues ensuring system stability.",
      "Improved reusability with shared Angular components/services.",
      "Developed CTC and Payroll modules for Thailand client.",
      "Integrated PeopleStrong and ClearTax systems for user tracking and analytics.",
      "Managed APIs for mobile app integration and end-to-end investment module development."
    ]
  },
  {
    name: "LSAssets (Asset Management System)",
    company: "Libsys Ltd. (Sep 2016 - Jun 2017)",
    description: `LSAssets uses RFID tags to track and manage items efficiently, facilitating reporting and auditing through handheld devices.`,
    link: "https://www.libsys.co.in/products/rfid-deployments/asset-management",
    skills: ["Java", "J2EE", "GWT", "Apache POI", "MySQL", "REST APIs", "RFID Integration"],
    roles: [
      "Designed system architecture and database schema.",
      "Developed migration utilities using Apache POI and integrated APIs with RFID-based microservices.",
      "Developed UI with GWT, deployed application, and handled Excel-to-database data migration."
    ]
  },
  {
    name: "LSCRM (CRM)",
    company: "Libsys Ltd. (Jul 2015 - Jul 2016)",
    description: `LSCRM (LSales1) centralizes customer information for a 360-degree view, enabling personalized sales, service, and marketing efforts.`,
    link: "https://www.libsys.co.in/products/omni-channel-retail-solutions/omnichannel-crm",
    skills: ["Java", "J2EE", "GWT", "Apache POI", "MySQL", "REST APIs", "RFID Integration"],
    roles: [
      "Designed system architecture and database schema.",
      "Developed migration utilities using Apache POI and integrated APIs with RFID-based microservices.",
      "Developed UI with GWT, deployed application, and handled Excel-to-database data migration."
    ]
  },
  {
    name: "LSAcademia",
    company: "Libsys Ltd. (Jul 2014 - Jun 2015)",
    description: `LSAcademia is an ERP solution for academic institutes, streamlining student, faculty, and management interactions.`,
    link: "https://play.google.com/store/apps/details?id=com.libsys.LSA_College&hl=en_CA",
    skills: ["Android SDK", "Java", "REST APIs", "Google Play Store Publishing"],
    roles: [
      "Developed Android application using Java and SDK.",
      "Implemented attendance, calendar, and timetable modules.",
      "Published the app on Google Play Store."
    ]
  }
];