export class Header {
    constructor(public firstName: string,public lastName: string,public about:string) {
  }
}

export class Contact {
    constructor(public description: string,public email:string,public linkedInUrl:string,public githubUrl:string) {
  }
}


export const header: Header = new Header('Rohit','Singla',
    `Full Stack Developer with 
    <span class="font-semibold text-indigo-600">11+ years of experience</span> 
    in
    <span class="font-semibold text-indigo-600">Java, Spring Boot, Angular, SQL, and Kubernetes</span>.
    Currently in Canada, open to new opportunities.`);

export const contact:Contact = new Contact('I’m open to job opportunities and collaborations. Reach out via email or connect with me on LinkedIn and GitHub.',
    'rohit.singla6@gmail.com','https://www.linkedin.com/in/rohit-singla-5273369a','https://github.com/singlar21'
)
