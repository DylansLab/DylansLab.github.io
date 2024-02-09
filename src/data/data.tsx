import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/IMG_4253.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Dylan Nguyen Resume',
  description: 'Resume for Dylan Nguyen - Software Engineer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Dylan Nguyen.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong> based in the Bay Area, currently
        working at <strong className="text-stone-100">Carson Group</strong> helping to develop application functionality and maintain infrastructure.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can find me <strong className="text-stone-100">trying new foods</strong>, sewing up{' '}
        <strong className="text-stone-100">clothes or bags</strong>, or attending a{' '}
        <strong className="text-stone-100">musical performance</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '../assets/dylan-nguyen-resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Location', text: 'Bay Area, CA', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Vietnamese American', Icon: FlagIcon},
    {label: 'Interests', text: 'Food, Sewing, Live Performances', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Texas at Dallas', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Carson Group', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
      {
        name: 'PHP',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'Golang',
        level: 3,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Infrastructure as Code',
        level: 7,
      },
      {
        name: 'CI/CD pipelines',
        level: 7,
      },
      {
        name: 'Monitoring and logging tools',
        level: 4,
      },
      {
        name: 'Containerization and Kubernetes',
        level: 4,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020',
    location: 'University of Texas at Dallas',
    title: 'Bachelors in Computer Science',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: '2016 - 2021',
    location: 'Simple Development',
    title: 'Solutions Architect',
    content: (
      <ul>
        <li>
          •Contributed to the development of React-based web applications, delivering modern and scalable user
          interfaces.
        </li>
        <li>
          •Utilized various GCP services, Cloud Storage, App Engine, and Workflows to deploy and manage scalable
          applications.
        </li>
        <li>•Designed and developed RESTful APIs for communication between front-end and back-end components.</li>
        <li>
          •Implemented CI/CD pipelines using tools like Jenkins and GitLab CI to automate testing and deployment
          processes.
        </li>
        <li>•Integrated automated testing suites to ensure code quality and reliability.</li>
      </ul>
    ),
  },
  {
    date: '2021 - Present',
    location: 'Carson Group',
    title: 'Web Developer',
    content: (
      <ul>
        <li>
          •Established and maintained Infrastructure as Code practices using Terraform to ensure scalability and
          consistency.
        </li>
        <li>•Created Bitbucket Pipelines to automate testing, build, and deployment processes.</li>
        <li>•Deployed Docker containers using AWS ECS to fulfill pipeline builds and deploys.</li>
        <li>
          •Implemented New Relic monitoring into several applications to ensure system reliability and performance.
        </li>
        <li>
          •Worked with AWS to deploy and manage infrastructure and optimized costs by implementing cost allocation
          tagging.
        </li>
        <li>
          •Maintained comprehensive documentation for infrastructure configurations, processes, and best practices.
        </li>
        <li>
          •Utilized Git as well as Bitbucket for version control, ensuring code collaboration and tracking changes
          effectively.
        </li>
        <li>
          •Worked on end-to-end development, handling both front-end and back-end components to deliver complete web
          solutions.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Please reach out to me through email or text!',
  items: [
    {
      type: ContactType.Email,
      text: 'nguyen.dyl@gmail.com',
      href: 'mailto:nguyen.dyl@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '415-987-9556',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Find me on LinkedIn!',
      href: 'https://www.linkedin.com/in/dylan-nguyen-185490123/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dylan-nguyen-185490123/'},
];
