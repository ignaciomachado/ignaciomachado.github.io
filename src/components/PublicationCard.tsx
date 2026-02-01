import type { Publication } from '../data/publications';
import { Award, MapPin, Calendar } from 'lucide-react';

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <div className="py-4 border-b border-slate-200 dark:border-slate-800 last:border-0">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mt-0.5">
          <Award className="w-5 h-5" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-medium text-slate-900 dark:text-slate-100">
            {publication.title}
          </h3>
          
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            {publication.conference}
          </p>
          
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500 dark:text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {publication.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {publication.date}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
