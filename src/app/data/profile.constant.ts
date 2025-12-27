import { Contact, Header, ProjectData, SkillCategory } from "./interfaces";

//. Change Data in below files to make changes//

export const header: Header = {firstName:'Rohit',lastName:'Singla',
    about:`Full Stack Developer with 
    <span class="font-semibold text-indigo-600">11+ years of experience</span> 
    in
    <span class="font-semibold text-indigo-600">Java, Spring Boot, Angular, SQL, and Kubernetes</span>.
    Currently in Canada, open to new opportunities.`};



export const contact:Contact = {description:`I’m open to job opportunities and collaborations. 
    Reach out via email or connect with me on LinkedIn and GitHub.`,
    email:'rohit.singla6@gmail.com',
    linkedInUrl:'https://www.linkedin.com/in/rohit-singla-5273369a',
    githubUrl:'https://github.com/singlar21'
}



 export const companyProjects:ProjectData[] = [
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



export const personalProjects:ProjectData[] = [
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

export const experience = [
    {
      role: 'Java Full Stack Lead',
      company: 'Rohit Singla IT Consulting Inc.',
      client: 'K-Tek (Staffing) → HCLTech (Client)',
      period: 'Dec 2025 – Present',
      description: 'Heading a team of 4+ for the migration of an application from JSF/Java to Spring Boot with Angular.',
      logoUrl: 'assets/rohitsingla.png',
      skills: ['Angular 18', 'JSF','Spring Boot', 'Microservices', 'Agile', 'Kubernetes', 'Docker', 'Git', 'MySQL']
    },
    {
      role: 'Senior Software Engineer 3',
      company: 'Ericsson India Pvt. Ltd.',
      period: 'Apr 2021 – Sep 2025',
      description: 'Led migration from AngularJS to Angular 16 and built microservices with RabbitMQ.',
      logoUrl: 'assets/ericsson.jpeg',
      skills: ['Angular 15', 'AngularJS','Spring Boot', 'Microservices', 'RabbitMQ', 'Agile', 'Kubernetes', 'Docker', 'PowerBI', 'Git', 'PostgreSQL',
        'Kafka','Elastic Search','Kibana']
    },
    {
      role: 'Senior Software Engineer',
      company: 'Peoplestrong Techonlogies Private',
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
    items: ['Jenkins, Git, GitLab, SVN/CVS', 'Jira, AWS (S3, cloudfront, Route 53)', 'Docker, Kubernetes']
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