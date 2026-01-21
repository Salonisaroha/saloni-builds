export interface HackathonEvent {
  id: number;
  name: string;
  images: string[];
}

export const hackathonEvents: HackathonEvent[] = [
  {
    id: 1,
    name: 'JPMC Code for Good',
    images: [
      'assets/hackathons/JPMC1.jpeg',
      'assets/hackathons/JPMC2.jpeg',
      'assets/hackathons/JPMC3.jpeg',
      'assets/hackathons/JPMC4.jpeg',
      'assets/hackathons/JPMC5.jpeg',
      'assets/hackathons/JPMC6.jpeg'
    ]
  }
];