export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Trainer {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}

export interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  imageUrl: string;
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
}
