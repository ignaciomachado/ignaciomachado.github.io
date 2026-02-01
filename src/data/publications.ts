export interface Publication {
  title: string;
  conference: string;
  location: string;
  date: string;
  description?: string;
  url?: string;
}

export const publications: Publication[] = [
  {
    title: 'Segno IO: Comprehensive Digital Signature Solution for Public Administration',
    conference: 'XI Simposio Argentino de Informática en el Estado (SIE) - JAIIO 46',
    location: 'Córdoba, Argentina',
    date: 'September 2017',
    description: 'A comprehensive solution for digital signature implementation in public administration.',
  },
  {
    title: 'Segno: The Versatility of a Digital Signer for Web Applications',
    conference: 'Jornadas Argentinas de Tecnología, Innovación y Creatividad (JATIC)',
    location: 'Mar del Plata, Argentina',
    date: 'November 2016',
    description: 'Exploring the versatility of digital signature tools for web applications.',
  },
];
