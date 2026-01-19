export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'GigFlow',
    description: 'Freelance marketplace platform connecting clients with skilled professionals',
    longDescription: 'A comprehensive freelance marketplace platform that connects clients with skilled professionals. Features include user authentication, project posting, bidding system, secure payments, and real-time messaging.',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO'],
    githubUrl: 'https://github.com/Salonisaroha/GigFlow',
    liveUrl: 'https://gigflow-demo.vercel.app', // Add your deployed URL
    featured: true
  },
  {
    id: 2,
    title: 'RealMingle',
    description: 'Real-time messaging application with WebSocket support',
    longDescription: 'A full-stack real-time messaging application built with Node.js, Express.js, MongoDB, and Socket.IO. Features include instant messaging, user authentication, chat rooms, and real-time notifications.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'React'],
    githubUrl: 'https://github.com/Salonisaroha/RealMingle',
    liveUrl: 'https://realmingle-demo.vercel.app', // Add your deployed URL
    featured: true
  },
  {
    id: 3,
    title: 'Life Tracker',
    description: 'Habit and activity tracking system',
    longDescription: 'A comprehensive habit and activity tracking system that helps users monitor their daily routines, set goals, and track progress over time. Built with a clean, intuitive interface.',
    technologies: ['HTML', 'CSS', 'Node.js', 'Express', 'MySQL'],
    githubUrl: 'https://github.com/Salonisaroha/Life_Trackr',
    liveUrl: 'https://life-tracker-demo.vercel.app', // Add your deployed URL
    featured: true
  }
];






