
import type { Course, TeamMember, Placement, Notification } from '@/types';
import { Briefcase, FileText, Users, Award, Linkedin, Twitter, Dribbble, HeartHandshake, Code, TrendingUp, Target } from 'lucide-react';

export const trainers = {
  ananyaSharma: {
    name: 'Ananya Sharma',
    title: 'Lead UI/UX Instructor',
    bio: 'Ananya is a design veteran with over 12 years of experience crafting beautiful and intuitive user experiences for major tech companies. She is passionate about mentoring the next generation of designers.',
    avatarUrl: '/images/women.png',
  },
  vikramSingh: {
    name: 'Vikram Singh',
    title: 'Senior DevOps Engineer',
    bio: 'Vikram has automated infrastructure for startups and large enterprises alike. His expertise lies in CI/CD pipelines, containerization, and cloud-native technologies.',
    avatarUrl: '/images/men.png',
  },
  priyaPatel: {
    name: 'Priya Patel',
    title: 'Principal Python Developer',
    bio: 'Priya is a full-stack wizard with a love for Python. She has built scalable web applications and data processing systems for various industries.',
    avatarUrl: '/images/women.png',
  },
  rohanMehta: {
    name: 'Rohan Mehta',
    title: 'Certified AWS Solutions Architect',
    bio: 'Rohan lives and breathes cloud computing. As a certified AWS professional, he has designed and managed robust, scalable, and cost-effective cloud infrastructures.',
    avatarUrl: '/images/men.png',
  },
};

export const courses: Course[] = [
  {
    id: 1,
    title: 'Advanced UI/UX Design',
    slug: 'advanced-ui-ux-design',
    description: 'Master the art of creating user-centric and visually stunning digital products.',
    longDescription: 'This comprehensive course covers everything from user research and wireframing to prototyping and usability testing. You\'ll work with industry-standard tools like Figma and learn design thinking principles to solve complex problems. Perfect for aspiring product designers.',
    imageUrl: '/images/course.png',
    syllabusPdfUrl: '/pdfs/advanced-ui-ux-design-syllabus.pdf',
    syllabus: [
      { title: 'Module 1: Design Thinking', content: 'Introduction to user-centered design, empathy maps, and journey mapping.' },
      { title: 'Module 2: User Research', content: 'Techniques for user interviews, surveys, and competitive analysis.' },
      { title: 'Module 3: Wireframing & Prototyping', content: 'Using Figma to create low-fidelity and high-fidelity prototypes.' },
      { title: 'Module 4: Visual Design', content: 'Typography, color theory, and creating a design system.' },
      { title: 'Module 5: Usability Testing', content: 'Planning and conducting tests to validate your designs.' },
    ],
    trainer: trainers.ananyaSharma,
    certification: 'Certified UI/UX Professional on successful completion of the course and final project.',
    reviews: [
      { id: 1, name: 'Aarav Gupta', rating: 5, comment: 'Ananya ma\'am is an amazing teacher. The course was very practical.', date: '2024-05-20', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'Advanced UI/UX Design' },
      { id: 2, name: 'Saanvi Reddy', rating: 4, comment: 'Great content, but I wished for more 1-on-1 sessions.', date: '2024-05-15', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'Advanced UI/UX Design' },
      { id: 3, name: 'Vivaan Joshi', rating: 5, comment: 'The portfolio I built in this course helped me get a job!', date: '2024-04-30', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'Advanced UI/UX Design' },
    ],
  },
  {
    id: 2,
    title: 'DevOps Engineering Pro',
    slug: 'devops-engineering-pro',
    description: 'Learn to build and manage scalable infrastructure with modern DevOps practices.',
    longDescription: 'Bridge the gap between development and operations. This course covers Git, Docker, Kubernetes, Jenkins, and Terraform. You\'ll learn to build automated CI/CD pipelines and manage infrastructure as code, essential skills for any modern software team.',
    imageUrl: '/images/course.png',
    syllabusPdfUrl: '/pdfs/devops-engineering-pro-syllabus.pdf',
    syllabus: [
      { title: 'Module 1: Version Control with Git', content: 'Mastering branching, merging, and collaborative workflows.' },
      { title: 'Module 2: Containerization with Docker', content: 'Creating and managing containers for consistent environments.' },
      { title: 'Module 3: Orchestration with Kubernetes', content: 'Deploying and scaling applications with K8s.' },
      { title: 'Module 4: CI/CD with Jenkins', content: 'Building automated pipelines for testing and deployment.' },
      { title: 'Module 5: Infrastructure as Code', content: 'Managing cloud resources with Terraform.' },
    ],
    trainer: trainers.vikramSingh,
    certification: 'Certified DevOps Engineer after passing the hands-on final exam.',
    reviews: [
      { id: 1, name: 'Advik Kumar', rating: 5, comment: 'Vikram sir explains complex topics so simply. Best DevOps course!', date: '2024-06-01', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'DevOps Engineering Pro' },
      { id: 2, name: 'Myra Das', rating: 5, comment: 'Very hands-on. I feel confident in my skills now.', date: '2024-05-28', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'DevOps Engineering Pro' },
    ],
  },
  {
    id: 3,
    title: 'Full-Stack Python Development',
    slug: 'full-stack-python-development',
    description: 'Become a versatile developer by mastering both front-end and back-end with Python.',
    longDescription: 'This course takes you from Python basics to building complete web applications. You\'ll learn Django for the back-end, React for the front-end, and how to connect them with a REST API. It\'s a complete package for anyone wanting to become a full-stack developer.',
    imageUrl: '/images/course.png',
    syllabusPdfUrl: '/pdfs/full-stack-python-development-syllabus.pdf',
    syllabus: [
      { title: 'Module 1: Python Fundamentals', content: 'Data types, control flow, functions, and OOP in Python.' },
      { title: 'Module 2: Django Web Framework', content: 'Models, views, templates, and the admin interface.' },
      { title: 'Module 3: REST APIs with Django Rest Framework', content: 'Building powerful APIs for your applications.' },
      { title: 'Module 4: Front-end with React', content: 'Components, state, props, and hooks in React.' },
      { title: 'Module 5: Project Deployment', content: 'Deploying your full-stack application to the cloud.' },
    ],
    trainer: trainers.priyaPatel,
    certification: 'Certified Full-Stack Python Developer upon successful project submission.',
    reviews: [
      { id: 1, name: 'Ishaan Aggarwal', rating: 4, comment: 'The course is very intensive but worth it. Priya ma\'am is very knowledgeable.', date: '2024-05-18', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'Full-Stack Python Development' },
      { id: 2, name: 'Diya Sharma', rating: 5, comment: 'I built a full e-commerce site from scratch. An incredible experience.', date: '2024-05-12', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'Full-Stack Python Development' },
    ],
  },
  {
    id: 4,
    title: 'AWS Cloud Practitioner',
    slug: 'aws-cloud-practitioner',
    description: 'Get foundational knowledge of the AWS cloud and prepare for the certification exam.',
    longDescription: 'Start your cloud journey with this foundational course. It covers core AWS services, security, architecture principles, and pricing models. This course is aligned with the official AWS Certified Cloud Practitioner exam, making it the perfect starting point for a career in cloud.',
    imageUrl: '/images/course.png',
    syllabusPdfUrl: '/pdfs/aws-cloud-practitioner-syllabus.pdf',
    syllabus: [
      { title: 'Module 1: Cloud Concepts', content: 'Understanding the benefits and economics of cloud computing.' },
      { title: 'Module 2: Core AWS Services', content: 'EC2, S3, RDS, VPC - what they are and when to use them.' },
      { title: 'Module 3: Security and Compliance', content: 'The shared responsibility model and key security services.' },
      { title: 'Module 4: Cloud Architecture', content: 'The AWS Well-Architected Framework.' },
      { title: 'Module 5: Pricing and Billing', content: 'Understanding AWS pricing models and cost management.' },
    ],
    trainer: trainers.rohanMehta,
    certification: 'Preparation and guidance for the official AWS Certified Cloud Practitioner exam.',
    reviews: [
      { id: 1, name: 'Kabir Singh', rating: 5, comment: 'Passed my AWS exam on the first try thanks to this course!', date: '2024-06-10', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'AWS Cloud Practitioner' },
      { id: 2, name: 'Anika Verma', rating: 5, comment: 'Rohan sir\'s teaching style is excellent. The material was very clear.', date: '2024-06-05', avatarUrl: 'https://placehold.co/100x100.png', courseTaken: 'AWS Cloud Practitioner' },
    ],
  },
];

export const team: TeamMember[] = [
    {
        name: 'Rajesh Kumar',
        title: 'Founder & CEO',
        bio: 'Rajesh is a visionary leader with 20+ years in the tech industry. He founded Samarthview to bridge the skill gap in India\'s tech workforce.',
        avatarUrl: '/images/men.png',
        socials: [
            { name: 'LinkedIn', url: '#', icon: 'LinkedIn' },
            { name: 'Twitter', url: '#', icon: 'Twitter' },
        ],
        coursesTaught: ['Keynote Speaker']
    },
    {
        name: 'Sunita Nair',
        title: 'Head of Operations',
        bio: 'Sunita ensures that our operations run smoothly, from student admissions to course delivery, providing a seamless experience for everyone.',
        avatarUrl: '/images/women.png',
        socials: [
            { name: 'LinkedIn', url: '#', icon: 'LinkedIn' },
        ],
        coursesTaught: ['Student Onboarding']
    },
    {
        name: 'Amit Deshpande',
        title: 'Director of Curriculum',
        bio: 'Amit works with our trainers to design and update our curriculum, ensuring it stays relevant to the fast-paced tech industry.',
        avatarUrl: '/images/men.png',
        socials: [
            { name: 'LinkedIn', url: '#', icon: 'LinkedIn' },
            { name: 'Twitter', url: '#', icon: 'Twitter' },
        ],
        coursesTaught: ['Advanced UI/UX Design', 'Full-Stack Python Development']
    }
];

export const placements: Placement[] = [
    {
        name: 'Rohan Sharma',
        quote: 'This course was a game-changer! I landed my dream job at Google just two months after graduating.',
        company: 'Google',
        companyLogoUrl: '/images/logo.png',
        avatarUrl: '/images/men.png'
    },
    {
        name: 'Priya Verma',
        quote: 'The practical skills I learned were invaluable. The instructors are top-notch.',
        company: 'Microsoft',
        companyLogoUrl: '/images/logo.png',
        avatarUrl: '/images/women.png'
    },
    {
        name: 'Sameer Khan',
        quote: 'From zero to a certified cloud engineer. The placement support was incredible.',
        company: 'Amazon',
        companyLogoUrl: '/images/logo.png',
        avatarUrl: '/images/men.png'
    },
    {
        name: 'Anjali Mehta',
        quote: 'The portfolio I built here got me noticed. I now work as a UI/UX designer at a leading startup.',
        company: 'Swiggy',
        companyLogoUrl: '/images/logo.png',
        avatarUrl: '/images/women.png'
    }
];

export const companyLogos = [
    { name: 'Google', logoUrl: '/images/logo.png' },
    { name: 'Microsoft', logoUrl: '/images/logo.png' },
    { name: 'Amazon', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Swiggy', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Flipkart', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Zomato', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Paytm', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Ola', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Cred', logoUrl: 'https://placehold.co/140x70.png' },
    { name: 'Razorpay', logoUrl: 'https://placehold.co/140x70.png' },
];

export const placementAssistance = [
    {
        icon: FileText,
        title: "Resume Building",
        description: "Craft a professional resume that stands out to recruiters and highlights your skills and projects."
    },
    {
        icon: Users,
        title: "Mock Interviews",
        description: "Practice your interviewing skills with our experts and get personalized feedback to build your confidence."
    },
    {
        icon: Briefcase,
        title: "Job Fairs",
        description: "Get exclusive access to virtual and in-person job fairs with our network of hiring partners."
    },
     {
        icon: Award,
        title: "Portfolio Development",
        description: "Build a strong portfolio of real-world projects that showcase your abilities to potential employers."
    },
];

export const notifications: Notification[] = [
    {
        id: 1,
        title: "New Webinar: Future of UX",
        description: "Join our live webinar with Ananya Sharma.",
        timestamp: "2 hours ago",
        type: "webinar",
        link: "/courses/advanced-ui-ux-design",
        read: false,
    },
    {
        id: 2,
        title: "Assignment Due",
        description: "Your DevOps project submission is due tomorrow.",
        timestamp: "1 day ago",
        type: "reminder",
        link: "/courses/devops-engineering-pro",
        read: false,
    },
    {
        id: 3,
        title: "Python Course Updated",
        description: "Module 5 has been updated with new content on deployment.",
        timestamp: "3 days ago",
        type: "update",
        link: "/courses/full-stack-python-development",
        read: true,
    }
];

export const whyChooseUs = [
    {
        icon: Target,
        title: "Resume Building",
        description: "Craft a standout resume that gets noticed by top recruiters."
    },
    {
        icon: HeartHandshake,
        title: "Expert Mentorship",
        description: "Get personalized guidance and support from industry veterans."
    },
    {
        icon: TrendingUp,
        title: "Exclusive Job Fairs",
        description: "Connect directly with our network of leading hiring partners."
    },
     {
        icon: Code,
        title: "Real-World Projects",
        description: "Build a strong portfolio by working on industry-relevant projects."
    },
];
