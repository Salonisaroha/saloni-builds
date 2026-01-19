export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'internship' | 'full-time' | 'contract';
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'JungleWorks',
    position: 'Software Engineer Intern',
    duration: 'Jul 2025 – Present',
    description: 'Working on optimizing user experiences and building scalable features for the platform.',
    achievements: [
      'Optimized onboarding journey (40% faster navigation)',
      'Built multilingual support (10+ languages)',
      'Constructed interactive customer BOT (reduced manual load by 30%)',
      'Engineered advanced article filter panel (35% improvement)'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'REST APIs'],
    type: 'internship'
  },
  {
    id: 2,
    company: 'Celebal Technologies Pvt Ltd',
    position: 'Backend Intern',
    duration: 'May 2025 – Jul 2025',
    description: 'Developed real-time communication systems and scalable backend solutions.',
    achievements: [
      'Built real-time messaging engine (500+ users)',
      'Event-driven communication layer (-45% latency)',
      'Scalable chat data model (+30% query performance)',
      'Secure backend workflows with token auth'
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'JWT', 'Event-driven Architecture'],
    type: 'internship'
  }
];






