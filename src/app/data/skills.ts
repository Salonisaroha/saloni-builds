export interface Skill {
  id: number;
  name: string;
  category: 'language' | 'framework' | 'database' | 'cloud' | 'tool' | 'concept';
  icon?: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export const skills: Skill[] = [
  // Languages
  { id: 1, name: 'C++', category: 'language', level: 'advanced' },
  { id: 2, name: 'JavaScript', category: 'language', level: 'advanced' },
  { id: 3, name: 'TypeScript', category: 'language', level: 'advanced' },
  { id: 4, name: 'Java', category: 'language', level: 'intermediate' },
  { id: 5, name: 'Python', category: 'language', level: 'beginner' },
  
  // Frameworks
  { id: 6, name: 'Node.js', category: 'framework', level: 'advanced' },
  { id: 7, name: 'Express.js', category: 'framework', level: 'advanced' },
  { id: 8, name: 'Angular', category: 'framework', level: 'advanced' },
  
  // Databases
  { id: 9, name: 'MySQL', category: 'database', level: 'intermediate' },
  { id: 10, name: 'PostgreSQL', category: 'database', level: 'intermediate' },
  { id: 11, name: 'MongoDB', category: 'database', level: 'advanced' },
  
  // Cloud & Tools
  { id: 12, name: 'Git', category: 'tool', level: 'advanced' },
  { id: 13, name: 'CI/CD', category: 'tool', level: 'intermediate' },
  { id: 14, name: 'Google Cloud Platform', category: 'cloud', level: 'intermediate' },
  { id: 15, name: 'ServiceNow', category: 'tool', level: 'intermediate' },
  
  // Concepts
  { id: 16, name: 'Microservices', category: 'concept', level: 'intermediate' },
  { id: 17, name: 'REST APIs', category: 'concept', level: 'advanced' },
  { id: 18, name: 'Event-driven Architecture', category: 'concept', level: 'intermediate' },
  { id: 19, name: 'JWT', category: 'concept', level: 'advanced' },
  { id: 20, name: 'WebSockets', category: 'concept', level: 'advanced' }
];

export const skillCategories = {
  language: 'Languages',
  framework: 'Frameworks',
  database: 'Databases',
  cloud: 'Cloud & Tools',
  tool: 'Tools',
  concept: 'Concepts'
};






