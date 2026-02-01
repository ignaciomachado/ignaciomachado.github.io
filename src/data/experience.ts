export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Tienda Nube',
    startDate: 'August 2024',
    endDate: 'Present',
    description: 'Product development for conversational commerce, integrating artificial intelligence to enhance user experience on the e-commerce platform. Optimizing components and improving software architecture to ensure scalability and performance using React, Symfony, and Node.js.',
    technologies: ['React', 'Symfony', 'Node.js', 'TypeScript', 'AI'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Honorable Tribunal de Cuentas (Bs.As)',
    startDate: 'June 2015',
    endDate: 'August 2024',
    description: 'Co-responsible for the Software Production sub-process under ISO9001 quality standards. Led the complete development cycle, from requirements conceptualization to post-production support, ensuring exhaustive technical documentation and end-user training.',
    technologies: ['PHP', 'JavaScript', 'SQL', 'Docker'],
  },
  {
    title: 'Full Stack Developer',
    company: 'VICI',
    startDate: 'October 2023',
    endDate: 'August 2024',
    description: 'Focused on React development, API integrations like WhatsApp Business, and automation with artificial intelligence to optimize e-commerce platforms.',
    technologies: ['React', 'WhatsApp Business API', 'AI', 'Node.js'],
  },
  {
    title: 'Teaching Assistant - Software Production Technologies',
    company: 'Facultad de Informática, UNLP',
    startDate: 'August 2021',
    endDate: 'September 2024',
    description: 'Assistance in Java development concepts, best practices, and support in academic projects.',
    technologies: ['Java', 'Teaching', 'Software Engineering'],
  },
  {
    title: 'PHP & Node.js Developer',
    company: 'CeibusTech',
    startDate: 'November 2021',
    endDate: 'September 2023',
    description: 'Development of various applications for the main processes of ProntoPago, a company specialized in tax and service collection with almost 20 years of market experience.',
    technologies: ['PHP', 'Node.js', 'MySQL'],
  },
];
