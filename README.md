📄 Portfolio Config Guide

This project uses a few TypeScript interfaces that help you easily update your personal information, skills, and projects.
Edit the constants based on the interfaces below, build the Angular app, and deploy your portfolio anywhere (Netlify, Vercel, GitHub Pages, etc.).

    ** 🧍 Header
    export interface Header {
        firstName: string;
        lastName: string;
        about: string;
    }

    Use this to update your name and short intro.

    ** 📬 Contact
    export interface Contact {
        description: string;
        email: string;
        linkedInUrl: string;
        githubUrl: string;
    }

    Update your basic contact details and social links.

    ** 🛠️ Skills
    export interface SkillCategory {
        title: string;
        icon?: string;
        type: 'list' | 'badge';
        color: string;
        items: string[];
        badgeColor?: string;
    }

    Use this to group skills using lists or badges.

    ** 🚀 Projects
    export interface ProjectData {
        name: string;
        company: string;
        description: string;
        skills: string[];
        roles: string[];
        link?: string;
    }

    Add your project details, responsibilities, and tech stack.

    ** Change Images in assets forlder according to your requirement.

*******************************************************************

🔧 How to Use

1. Open the constants file data>profile.constant.ts

2. Replace my data with your own values using the interfaces above.

3. Run the project:  ng serve

4. Build for deployment:

    ng build --configuration production

5. Deploy the /dist/rohit-portfolio/browser folder.