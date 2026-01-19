export interface Certification {
  id: number;
  name: string;
  imageUrl: string; // Path to certificate image
}

export const certifications: Certification[] = [
  {
    id: 1,
    name: 'ServiceNow Certified System Administrator',
    imageUrl: 'assets/certificates/servicenow_csa.jpg'
  },
  {
    id: 2,
    name: 'ServiceNow Certified Application Developer',
    imageUrl: 'assets/certificates/servicenow_cad.jpg'
  },
  {
    id: 3,
    name: 'Prompt Design',
    imageUrl: 'assets/certificates/ML1.jpg'
  },
  {
    id: 4,
    name: 'Generative AI',
    imageUrl: 'assets/certificates/ML2.jpg'
  },
  {
    id: 5,
    name: 'Machine Learning & AI',
    imageUrl: 'assets/certificates/ML3.jpg'
  },
  {
    id: 6,
    name: 'Prompt Design in vertex AI',
    imageUrl: 'assets/certificates/ML4.jpg'
  },

]; 






