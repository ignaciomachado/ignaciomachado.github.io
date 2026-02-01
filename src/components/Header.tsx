import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  currentPath: string;
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Header({ currentPath }: HeaderProps) {
  return (
    <header className="py-8">
      <nav className="container-narrow flex items-center justify-between">
        <a 
          href="/" 
          className="font-mono font-semibold text-lg hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          Ignacio Machado
        </a>
        
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPath === link.href
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          
          <ThemeToggle client:load />
        </div>
      </nav>
    </header>
  );
}
