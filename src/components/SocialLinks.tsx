import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/ignaciomachado',
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/ignacio-raul-machado/',
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:ignaciormachado@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-500 dark:text-slate-400 mr-2">
        Find me on
      </span>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
