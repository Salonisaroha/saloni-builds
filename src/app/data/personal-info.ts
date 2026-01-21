export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  aboutDescription: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl?: string;
  achievements: string[];
  certifications: string[];
  softSkills: string[];
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: 'Saloni Saroha',
  title: 'Passionate Programmer | Full Stack Developer | Problem Solver',
  summary: 'Adaptable and detail-oriented technology professional with experience in designing, developing, and optimizing end-to-end digital solutions. Skilled across UI, backend, APIs, databases, and cloud. Known for strong analytical thinking, fast learning, and collaborative delivery of secure and efficient software.',
  aboutDescription: 'When I\'m not coding, you\'ll find me exploring the latest tech trends or working on side projects. I believe great software comes from understanding both the technical challenges and the people who use it. My journey started with curiosity about how websites work, and now I\'m passionate about creating digital experiences that make a difference.',
  email: 'salonisaroha5@gmail.com',
  github: 'https://github.com/Salonisaroha',
  linkedin: 'https://www.linkedin.com/in/saloni-saroha/',
  achievements: [
    'JPMorgan & Chase Hackathon – Code for Good',
    'Flipkart GRiD 6.0',
    'Myntra HackerRamp',
    'Social Summer of Code – Open Source Contributor'
  ],
  certifications: [
    'ServiceNow Certified System Administrator (CSA)',
    'ServiceNow Certified Application Developer (CAD)'
  ],
  softSkills: [
    'Communication',
    'Problem-solving',
    'Teamwork',
    'Adaptability',
    'Fast Learning'
  ],
  interests: [
    'Fitness',
    'Tech Exploration',
    'Doodling',
    'Traveling',
    'Volunteering'
  ]
};






