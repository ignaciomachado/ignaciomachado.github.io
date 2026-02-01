import type { Experience } from '../data/experience';
import { Building2, Calendar } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group py-6 border-b border-slate-200 dark:border-slate-800 last:border-0">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
            {experience.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              {experience.company}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {experience.startDate} - {experience.endDate}
            </span>
          </div>
          
          <p className="mt-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            {experience.description}
          </p>
          
          {experience.technologies && (
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
