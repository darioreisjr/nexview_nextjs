import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  tooltip: string;
  className?: string;
}

export function IconLink({ href, icon: Icon, tooltip, className }: IconLinkProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground ${className}`}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{tooltip}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{tooltip}</TooltipContent>
    </Tooltip>
  );
}
