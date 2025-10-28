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
    "Name": "CMC (Configuration Management Center)",
    "Company": "Ericsson India Pvt. Ltd. (January 2023 - Sep 2025)",
    "Description": `CMC is a software solution developed by Ericsson to assist with the administration 
    and configuration of multiple network nodes. This project involved close collaboration with the 
    Germany client team, managing communications, requirements, and delivery schedules.`,
    "Skills": "Angular JS, Angular 14, Spring Boot, RabbitMQ, REST APIs, Microservices, Agile, Team Coordination, Docker, Kubernetes, JUnit, Mockito",
    "Roles": ['Acted as the primary point of contact between the India and Germany teams.', 
    'Coordinated requirements, feedback, and delivery schedules. Facilitated daily/weekly calls, progress reporting, and issue resolution.',
    'Participated in AngularJS to Angular 16 migration.',
    'Architected microservices with RabbitMQ for asynchronous communication, and mentored junior developers.']
  },
  {
    "Name": "QMT (Quality Metrics Test)",
    "Company": "Ericsson India Pvt. Ltd. (Apr 2021 - Dec 2022)",
    "Description": `QMT is a quality tracking and reporting system for automation metrics. It helps 
    in measuring automation savings, performance, and quality insights for stakeholders.`,
    "Skills": "Angular 16, JSF, Spring Boot, MySQL, Power BI, Stored Procedures, REST APIs, Agile, Hibernate, Redis, JUnit",
    "Roles": 
    ['Optimized MySQL queries improving performance by 30%. Created stored procedures to automate savings calculations, reducing manual effort by 90%.',
    'Integrated Power BI dashboards in Angular for better visualization.',
    'Mentored junior developers, reviewed code, and coordinated with QA and product owners in Agile/Scrum.',
    'Migrated JSF app to Angular 8 and upgraded to Angular 16.']
  },
  {
    "Name": "AltWorklife (HRMS Portal)",
    "Company": "PeopleStrong HR Services (Jul 2017 - Mar 2021)",
    "Description": `A comprehensive HR tech suite to help you leverage data, processes, and insights to create seamless employee experiences.
    AltWorklife is an enterprise HR management platform offering modules like payroll, 
    leave management, and investment tracking.`,
    "Skills": "Angular 8,JSF, Spring Boot, EJB, Hibernate, REST APIs, ClearTax-AltWorklife Integration, SQL Server",
    "Link": "https://www.peoplestrong.com/human-capital-management-software",
    "Roles": 
    [
      'Handled L2 support for production issues ensuring system stability.',
      'Improved reusability with shared Angular components/services.', 
      'Handled the Thailand client to make CTC and Payroll module for them.',
      'Integrated PeopleStrong and ClearTax systems for user tracking and analytics.',
      'Managed APIs for mobile app integration and end-to-end investment module development.'
    ]
  },
  {
    "Name": "LSAssets (Asset Management System)",
    "Company": "Libsys Ltd. (Sep 2016 - Jun 2017)",
    "Description": `LSAsset Management System uniquely identifies any object by affixing an RFID tag.
    It facilitates tracking and management of tagged items.
    An RFID tag is attached with the assets and each tag is allocated a unique number for identification.
     The LSAsset Management system is used to keep the record of all the assets. It can be used to handle issue and return of the assets.
     With RFID hand held device, we can easily track the assets for reporting and auditing purposes.`,
    "Skills": "Java, J2EE, GWT, Apache POI, MySQL, REST APIs, RFID Integration",
    "Link" : "https://www.libsys.co.in/products/rfid-deployments/asset-management",
    "Roles": 
    [
      'Designed system architecture and database schema.', 
      'Developed migration utilities using Apache POI and integrated APIs with RFID-based microservices.',
      'Developed UI with GWT, deployed application on client site, and handled Excel-to-database data migration.'
    ]
  },
  {
    "Name": "LSCRM (CRM)",
    "Company": "Libsys Ltd. (July 2015 - July 2016)",
    "Description": `LIBSYS CRM software branded as LSales1 has features to capture all customer information
     and keep them on a central repository to provide complete 360 degree view of the customer. 
     Single view of customer helps to engage them better by personalizing the sales, service and marketing efforts. 
     It manages one-to-one customer interaction, acquire more leads information and closing deals faster.`,
    "Skills": "Java, J2EE, GWT, Apache POI, MySQL, REST APIs, RFID Integration",
    "Link": "https://www.libsys.co.in/products/omni-channel-retail-solutions/omnichannel-crm",
    "Roles": 
    [
      'Designed system architecture and database schema.', 
      'Developed migration utilities using Apache POI and integrated APIs with RFID-based microservices.',
      'Developed UI with GWT, deployed application on client site, and handled Excel-to-database data migration.'
    ]
  },
  {
    "Name": "LSAcademia",
    "Company": "Libsys Ltd. (Jul 2014 - Jun 2015)",
    "Description": `LSAcademia is an ERP Software/SaaS/App product for complete automation of academic institutes.
    LSAcademia manages the complete academic cycle of the students, thereby streamlining their interaction with the faculty and the management. 
    A complete ERP solution for academic institutes that simplifies workflow and facilitates communication between all the stakeholders.`,
    "Skills": "Android SDK, Java, REST APIs, Google Play Store Publishing",
    "Link": "https://play.google.com/store/apps/details?id=com.libsys.LSA_College&hl=en_CA",
    "Roles": 
    [
      'Developed Android application using Java and SDK.', 
      'Implemented attendance, calendar, and timetable modules.', 
      'Published the app on Google Play Store.'
    ]
  }
];

