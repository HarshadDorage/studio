
export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl: string;
  courseTaken: string;
}

export interface Trainer {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  socials?: { name: string; url: string; icon: string }[];
  coursesTaught?: string[];
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  syllabusPdfUrl?: string;
  syllabus: { title: string; content: string }[];
  trainer: Trainer;
  certification: string;
  reviews: Review[];
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  socials?: { name: string; url: string; icon: string | React.ElementType }[];
  coursesTaught?: string[];
}

export interface Placement {
    name: string;
    quote: string;
    company: string;
    companyLogoUrl: string;
    avatarUrl: string;
}

export interface Notification {
  id: number;
  title: string;
  description: string;
  timestamp: string;
  type: 'webinar' | 'reminder' | 'update';
  link: string;
  read: boolean;
}
