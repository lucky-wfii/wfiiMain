// Ultra-lightweight icon components
import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

const Icon = ({ size = 24, className = "", children }: IconProps & { children: React.ReactNode }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

// Only the icons we actually use - each optimized for minimal size
export const ChevronLeft = (props: IconProps) => (
  <Icon {...props}><path d="m15 18-6-6 6-6"/></Icon>
);

export const ChevronRight = (props: IconProps) => (
  <Icon {...props}><path d="m9 18 6-6-6-6"/></Icon>
);

export const Pause = (props: IconProps) => (
  <Icon {...props}><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></Icon>
);

export const Play = (props: IconProps) => (
  <Icon {...props}><polygon points="5,3 19,12 5,21"/></Icon>
);

export const Mail = (props: IconProps) => (
  <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></Icon>
);

export const Phone = (props: IconProps) => (
  <Icon {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>
);

export const ArrowUp = (props: IconProps) => (
  <Icon {...props}><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></Icon>
);

export const Menu = (props: IconProps) => (
  <Icon {...props}><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></Icon>
);

export const X = (props: IconProps) => (
  <Icon {...props}><path d="m18 6-12 12"/><path d="m6 6 12 12"/></Icon>
);

export const Eye = (props: IconProps) => (
  <Icon {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></Icon>
);

export const Target = (props: IconProps) => (
  <Icon {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></Icon>
);

export const Globe = (props: IconProps) => (
  <Icon {...props}><circle cx="12" cy="12" r="10"/><path d="m2 12 20 0"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></Icon>
);

export const TrendingUp = (props: IconProps) => (
  <Icon {...props}><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/><polyline points="16,7 22,7 22,13"/></Icon>
);

export const GraduationCap = (props: IconProps) => (
  <Icon {...props}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></Icon>
);

export const ShoppingCart = (props: IconProps) => (
  <Icon {...props}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></Icon>
);

export const Calendar = (props: IconProps) => (
  <Icon {...props}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></Icon>
);

export const MapPin = (props: IconProps) => (
  <Icon {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>
);

export const CheckCircle = (props: IconProps) => (
  <Icon {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></Icon>
);

export const Clock = (props: IconProps) => (
  <Icon {...props}><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></Icon>
);

export const ArrowRight = (props: IconProps) => (
  <Icon {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>
);

export const Loader2 = ({ size = 24, className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`animate-spin ${className}`}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
);
